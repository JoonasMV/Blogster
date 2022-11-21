import axios from "axios"
const baseUrl = "/api/login"

const login = async (username, password) => {
  const accessToken = axios.post(baseUrl, { username, password })
  return accessToken.data
}

export default { login }
