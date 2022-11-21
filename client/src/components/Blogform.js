import blogService from "../services/blogService"

const Blogform = () => {
  const test = async () => {
    const tok = await blogService.postBlog({title: "test", content: "test2"})
    console.log(tok)
  }


  return  (
    <>
      <button onClick={test}>Test</button>
    </>
  )
}

export default Blogform