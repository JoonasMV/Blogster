import axios from "axios"
import getToken from "./utils"
const baseUrl = "/api/comments"

const postComment = async (id, comment) => {
  const content = { content: comment }
  const postedComment = await axios.post(`${baseUrl}/${id}`, content, getToken)
  return postedComment.data
}

const getComments = async (id) => {
  const comments = await axios.get(`${baseUrl}/${id}`)
  return comments.data
}

export default { postComment, getComments }
