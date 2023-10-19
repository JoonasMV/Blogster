import { useState, useEffect } from "react";
import commentService from "services/commentService";
import { BlogContent, BlogUsername } from "css/BlogCss";
import {
  ResponseTextArea,
  ResButton,
  ReponseFormWrapper,
  CommentWrapper,
} from "./Comments.style";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <CommentWrapper key={comment.id}>
            <BlogUsername>{comment.user.username}</BlogUsername>
            <BlogContent>{comment.content}</BlogContent>
            <Responseform id={comment.id} />
            {comment.responses.map((response) => {
              return <Response key={response} id={response} />;
            })}
          </CommentWrapper>
        );
      })}
    </>
  );
};

const Response = ({ id }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    commentService.getResponse(id).then((res) => setComment(res));
  }, [id]);

  if (!comment) return null;

  return (
    <CommentWrapper>
      <BlogUsername>{comment.user.username}</BlogUsername>
      <BlogContent>{comment.content}</BlogContent>
      <Responseform id={comment.id} />
      {comment.responses.map((response) => {
        return <Response key={response} id={response} />;
      })
      }
    </CommentWrapper>
  );
};

const Responseform = ({ id }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState("");

  const submitResponse = async (e) => {
    e.preventDefault();
    try {
      const res = await commentService.postResponse(id, response);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return showResponse ? (
    <ReponseFormWrapper>
      <ResponseTextArea
        type="text"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <ResButton onClick={submitResponse}>Submit</ResButton>
      <ResButton onClick={() => setShowResponse(!showResponse)}>
        Cancel
      </ResButton>
    </ReponseFormWrapper>
  ) : (
    <ReponseFormWrapper>
      <ResButton onClick={() => setShowResponse(!showResponse)}>
        Respond
      </ResButton>
    </ReponseFormWrapper>
  );
};
export default Comments;
