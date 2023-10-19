import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../../services/blogService";
import { formatDate, formatTime } from "utils/dateFormatter";
import { textAreaAdjust } from "utils/textAreaAdjust";
import {
  CommentTextArea,
  LeftWrapper,
  EmptyLike,
  Sh2,
  RightWrapper,
  InfoWrapper,
  LikeButton,
  FilledLike,
  LikeWrapper,
  PostButton,
  BlogEditTextArea,
} from "./SingleBlog.style";
import commentService from "services/commentService";
import Comments from "./Comments/Comments";
import {
  PageWrapper,
  ElementWrapper,
  BlogContentWrapper,
  BlogContent,
  BlogTitle,
  BlogUsername,
} from "css/BlogCss";

const SingleBlog = () => {
  const { id } = useParams();
  const ref = useRef(null);
  const heightRef = useRef(null);
  const [blog, setBlog] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    blogService.getOne(id).then((res) => setBlog(res));
    blogService.checkLike(id).then((res) => setLiked(res));
  }, [id]);

  useEffect(() => {
    commentService.getBlogComments(id).then((res) => setComments(res));
  }, [id]);

  useEffect(() => {
    let height;
    let height2;
    if (heightRef?.current?.clientHeight) {
      height = heightRef?.current?.clientHeight;
      console.log("updated 1")
    }
    if (ref?.current?.clientHeight) {
      height2 = ref?.current?.clientHeight;
      console.log("updated 2")
    }
    console.log(height);
    console.log(height2);
  }, [editMode]);

  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleBlogLiking = async () => {
    try {
      const res = await blogService.likeBlog(blog.id);
      setBlog((prevState) => ({ ...prevState, likes: res.likes }));
      setLiked(!liked);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
    setEditContent(blog.content);
  };

  const handleBlogEdit = async () => {
    try {
      const res = await blogService.editBlog(blog.id, editContent);
      setBlog((prevState) => ({ ...prevState, content: res.content }));
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };
  textAreaAdjust(ref);

  return (
    <PageWrapper>
      <ElementWrapper>
        <BlogTitle> {blog.title} </BlogTitle>
        {blog?.user?.id === user?.id && editMode ? (
          <>
            <BlogEditTextArea
              ref={ref}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </>
        ) : (
          <BlogContentWrapper ref={heightRef}>
            <BlogContent>{blog.content}</BlogContent>
          </BlogContentWrapper>
        )}
        <button onClick={handleEditMode}>edit</button>

        <InfoWrapper>
          <LeftWrapper>
            <BlogUsername>
              {blog.user ? blog.user.username : "[deleted]"}
            </BlogUsername>
            <LikeWrapper>
              <LikeButton onClick={handleBlogLiking}>
                {liked ? <FilledLike /> : <EmptyLike />}
              </LikeButton>
              <div>{blog.likes ? blog.likes.length : 0}</div>
            </LikeWrapper>
          </LeftWrapper>
          <RightWrapper>
            <div>{formatDate(blog.dateAdded)}</div>
            <div>{formatTime(blog.dateAdded)}</div>
          </RightWrapper>
        </InfoWrapper>
      </ElementWrapper>

      <CommentForm setComments={setComments} />
      <Comments comments={comments} />
    </PageWrapper>
  );
};

const CommentForm = ({ setComments }) => {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const ref = useRef(null);

  const postComment = async () => {
    const newComment = await commentService.postComment(id, comment);
    console.log(newComment);
    setComment("");
    setComments((comments) => comments.concat(newComment));
  };

  textAreaAdjust(ref);

  return (
    <ElementWrapper>
      <Sh2>Post comment</Sh2>
      <CommentTextArea
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          textAreaAdjust();
        }}
        ref={ref}
      />
      <PostButton onClick={postComment}>Post comment</PostButton>
    </ElementWrapper>
  );
};

export default SingleBlog;
