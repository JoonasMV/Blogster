import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../services/blogService";
import commentService from "services/commentService";
import {
  PageWrapper,
  ElementWrapper,
  BlogContentWrapper,
  BlogContent,
  BlogTitle,
  BlogUsername,
} from "css/BlogCss";
import { formatDate, formatTime } from "utils/dateFormatter";
import { Timestamp } from "./SingleBlog.style";
import Commentlist from "components/Commentlist/Commentlist";

const SingleBlog = ({ user }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    blogService.getOne(id).then((res) => setBlog(res));

    // Can be used to load comments in patcheds if needed
  
  }, [id]); 

  return (
    <PageWrapper>
      <ElementWrapper>
        <BlogTitle> {blog.title} </BlogTitle>
        <BlogContentWrapper>
          <BlogContent>{blog.content}</BlogContent>
        </BlogContentWrapper>
        <BlogUsername>
          {blog.user ? blog.user.username : "[deleted]"}
        </BlogUsername>
        <Timestamp>
          <div>{formatDate(blog.dateAdded)}</div>
          <div>{formatTime(blog.dateAdded)}</div>
        </Timestamp>
      </ElementWrapper>

      <h2>Comments</h2>
      <textarea></textarea>
      <Commentlist/>
    </PageWrapper>
  );
};

export default SingleBlog;
