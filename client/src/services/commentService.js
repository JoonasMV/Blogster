import axios from "axios"
import getToken from "./utils"
const baseUrl = "/api/comments"

const postComment = async (id, comment) => {
  const content = { content: comment }
  const postedComment = await axios.post(`${baseUrl}/${id}`, content, getToken)
  return postedComment.data
}

export default { postComment }