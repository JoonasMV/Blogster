import axios from "axios"
import getToken from "./utils"
const baseUrl = "/api/comments"

const postComment = async (id, comment) => {
  const content = { content: comment }
  const postedComment = await axios.post(`${baseUrl}/${id}`, content, getToken)
  return postedComment.data
}

const postResponse = async (id, response) => {
  const content = { content: response }
  const postedResponse = await axios.post(`${baseUrl}/respond/${id}`, content, getToken)
  return postedResponse.data
}

const getComments = async (id, min, max) => {
  const comments = await axios.get(`${baseUrl}/${id}`, { params: { minDoc: min, maxDoc: max }})
  return comments.data
}

export default { postComment, getComments }
