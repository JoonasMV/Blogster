import axios from "axios"
import getToken from "../utils/getToken"
const baseUrl = "/api/comments"

const postComment = async (id, comment) => {
  const content = { content: comment }
  const postedComment = await axios.post(`${baseUrl}/${id}`, content, getToken)
  return postedComment.data
}

const postResponse = async (id, comment) => {
  const content = { content: comment }
  const postedResponse = await axios.post(`${baseUrl}/response/${id}`, content, getToken)
  return postedResponse.data;
}

const getBlogComments = async (id, min, max) => {
  const comments = await axios.get(`${baseUrl}/blog/${id}`, { params: { minDoc: min, maxDoc: max }})
  return comments.data
}

const getResponses = async (id ,commentId) => {
  const response = await axios.get(`${baseUrl}/${id}`, { params: { commentId: commentId }})
  return response.data
}

const commentService = { postComment, getBlogComments, getResponses: getResponses, postResponse }
export default commentService
