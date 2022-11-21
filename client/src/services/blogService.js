import axios from "axios"
const baseUrl = "/api/blogs"

const getAll = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}

const getToken = () => sessionStorage.getItem("accessToken")

const postBlog = async (newBlog) => {
  const accessToken = getToken()
  const postedBlog = await axios.post(baseUrl, newBlog, accessToken)
  return postedBlog.data
}

export default { getAll, postBlog }