import axios from "axios"
import getToken from "../utils/getToken"
const baseUrl = "/api/users"

const getById = async (id) => {
  const user = await axios.get(`${baseUrl}/${id}`)
  return user.data
}

const createNewUser = async (newUser) => {
  try {
    const createdUser = await axios.post(baseUrl, newUser)
    return createdUser
  } catch (error) {
    return error.response
  }
}

const editUserBio = async (id, bio) => {
  console.log(id, bio)
  const updatedUser = await axios.put(`${baseUrl}/${id}`, bio, getToken)
  console.log(updatedUser.data)
  return updatedUser.data
}

const userService = { getById, createNewUser, editUserBio }
export default userService
