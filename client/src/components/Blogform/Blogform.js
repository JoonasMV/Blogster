import blogService from "../../services/blogService";
import { useEffect, useRef, useState } from "react";
import { ElementWrapper, PageWrapper } from "css/BlogCss";
import {
  BlogTextArea,
  BlogTitle,
  FormButton,
  NewBlogH2,
  TitleWrapper,
} from "./Blogform.style";
import { textAreaAdjust } from "utils/textAreaAdjust";

const Blogform = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    textAreaAdjust(titleRef);
    textAreaAdjust(contentRef);
  }, [content, title]);

  const handleBlogPost = (e) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      content: content,
    };
    blogService.postBlog(newBlog);
    setTitle("");
    setContent("");
  };

  return (
    <PageWrapper>
      <ElementWrapper>
        <NewBlogH2>Write a new blog</NewBlogH2>

        <form onSubmit={handleBlogPost}>
          <TitleWrapper>
            <BlogTitle
              type="text"
              ref={titleRef}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Title"
            />
          </TitleWrapper>

          <div>
            <BlogTextArea
              placeholder="content"
              ref={contentRef}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>

          <FormButton type="submit">Post</FormButton>
          <FormButton type="button">cancel</FormButton>
        </form>
      </ElementWrapper>
    </PageWrapper>
  );
};

export default Blogform;
