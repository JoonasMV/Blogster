const userRouter = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const authChecker = require("../utils/authChecker");

userRouter.get("/", async (req, res) => {
  const users = await User.find({}).populate("blogs");
  res.json(users);
});

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate("blogs");
  res.json(user);
});

userRouter.post("/", async (req, res) => {
  try {
    const { username, email = null, password, bio } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      passwordHash,
      bio,
    });

    const duplicateUser = await User.find({
      username: { $regex: "^" + username + "$", $options: "i" },
    });
    if (duplicateUser.length !== 0) {
      return res.status(400).json({ error: "Username already taken" });
    }

    const addedUser = await newUser.save();
    res.status(201).json(addedUser);
  } catch (ex) {
    console.log(ex.message);
    res.status(400).json({ error: "Username is invalid" });
  }
});

userRouter.put("/:id", authChecker, async (req, res) => {
  const id = req.params.id;
  const { bio } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { bio },
      { new: true }
    );
    return res.json(updatedUser);
  } catch (error) {
    return res.send(error).status(400);
  }
});

module.exports = userRouter;
