const getToken = () => {
  const getToken = () => JSON.parse(sessionStorage.getItem("accessToken"))
  const authHeader = `Bearer ${getToken()}`
  const auth = { headers: { authorization: `Bearer ${getToken()}` }}
  return auth
}

export default getToken()