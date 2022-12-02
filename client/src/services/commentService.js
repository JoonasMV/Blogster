import axios from "axios"
import getToken from "./utils"
const baseUrl = "/api/comments"

const postComment = async (id, comment) => {
  const content = { content: comment }
  const postedComment = await axios.post(`${baseUrl}/${id}`, content, getToken)
  return postedComment.data
}

const getComments = async (id, min, max) => {
  console.log(min, max)
  const comments = await axios.get(`${baseUrl}/${id}`, { params: { minDoc: min, maxDoc: max }})
  return comments.data
}

export default { postComment, getComments }
