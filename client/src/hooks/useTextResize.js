const useTextResize = () => {
  setComment(e.target.value)
  const commentBox = commentRef.current
  commentBox.style.height = ""
  commentBox.style.height = commentBox.scrollHeight - 3 + "px"
}

export default useTextResize
