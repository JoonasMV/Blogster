import blogService from "../../services/blogService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BlogTitle,
  BlogContentWrapper,
  ElementWrapper,
  PageWrapper,
} from "css/BlogCss";
import { Username } from "./Bloglist.style";
const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    blogService.getAll().then((res) => setBlogs(res));
  }, []);
  return (
    <>
      {blogs.map((blog) => {
        return (
          <PageWrapper key={blog.id}>
            <ElementWrapper>
              <BlogTitle onClick={() => navigate(`/blogs/${blog.id}`)}>
                {blog.title}
              </BlogTitle>
              <BlogContentWrapper>{blog.content}</BlogContentWrapper>
              {blog.user ? (
                <Username onClick={() => navigate(`/user/${blog?.user?.id}`)}>
                  {blog?.user?.username}
                </Username>
              ) : (
                <div>[deleted]</div>
              )}
            </ElementWrapper>
          </PageWrapper>
        );
      })}
    </>
  );
};

export default Bloglist;
