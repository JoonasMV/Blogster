import axios from "axios"
const baseUrl = "/api/users"

const getById = async (id) => {
  const user = await axios.get(`${baseUrl}/${id}`)
  return user.data
}

const createNewUser = async (newUser) => {
  const createdUser = await axios.post(baseUrl, newUser)
  return createdUser
}

export default { getById, createNewUser }