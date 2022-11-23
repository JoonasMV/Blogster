import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../services/userService"

const User = () => {
  const [pageUser, setPageUser] = useState(null)

  const { id } = useParams()
  useEffect(() => {
    userService.getById(id)
      .then(res => setPageUser(res))
  }, [])
  
  if(!pageUser) return null

  return (
    <>
      {console.log(pageUser)}
      <h2>{pageUser.username}'s page</h2>
      <ul>
        {pageUser.blogs.map(blog => <li>blog.title</li>)}        
      </ul>
    </>
  )
}

export default User