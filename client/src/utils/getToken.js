const getToken = () => {
  const user = JSON.parse(sessionStorage.getItem("user"))
  if(user) {
    const auth = { headers: { authorization: `Bearer ${user.accessToken}` }}
    return auth
  }
}

export default getToken()