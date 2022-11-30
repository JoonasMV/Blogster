const getToken = () => {
  const getToken = () => JSON.parse(sessionStorage.getItem("accessToken"))
  const auth = { headers: { authorization: `Bearer ${getToken()}` }}
  return auth
}

export default getToken()