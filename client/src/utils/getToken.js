const getToken = () => {
  const token = JSON.parse(sessionStorage.getItem("accessToken"))
  const auth = { headers: { authorization: `Bearer ${token}` }}
  return auth
}

export default getToken()