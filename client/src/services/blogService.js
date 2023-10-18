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

const likeBlog = async (id) => {
  const likedBlog = await axios.post(`${baseUrl}/like/${id}`, null, getToken)
  return likedBlog.data
}

const checkLike = async (id) => {
  const likedBlog = await axios.get(`${baseUrl}/like/${id}`, getToken)
  return likedBlog.data
}

const blogService = { getAll, getOne, postBlog, updateBlog, likeBlog, checkLike }
export default blogService
