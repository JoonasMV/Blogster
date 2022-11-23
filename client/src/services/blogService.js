import axios from "axios"
const baseUrl = "/api/blogs"

const getAll = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}

const getToken = () => JSON.parse(sessionStorage.getItem("accessToken"))

const postBlog = async (newBlog) => {
  const postedBlog = await axios.post(baseUrl, newBlog, {
    headers: { authorization: `Bearer ${getToken()}` },
  })
  return postedBlog.data
}

export default { getAll, postBlog }
