import axios from "axios"
const baseUrl = "/api/users"

const getById = async (id) => {
  const user = await axios.get(`${baseUrl}/${id}`)
  return user.data
}

export default { getById }