import axios from "axios"
import getToken from "../utils/getToken"
const baseUrl = "/api/blogs"

const getAll = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}

const getOne = async (id) => {
  const blog = await axios.get(`${baseUrl}/${id}`)
  return blog.data
}

const postBlog = async (newBlog) => {
  const postedBlog = await axios.post(baseUrl, newBlog, getToken)
  return postedBlog.data
}

const updateBlog = async (updatedBlog, id) => {
  const content = { content: updatedBlog }
  const updateBlog = await axios.put(`${baseUrl}/${id}`, content, getToken)
  return updateBlog.data
}

export default { getAll, getOne, postBlog, updateBlog }
