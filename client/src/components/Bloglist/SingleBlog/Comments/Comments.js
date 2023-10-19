import { useState, useEffect } from "react";
import commentService from "services/commentService";
import { BlogContent, BlogUsername } from "css/BlogCss";
import { useNavigate } from "react-router-dom";
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
        return <Response id={comment.id}></Response>;
      })}
    </>
  );
};

const Response = ({ id }) => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    commentService.getResponses(id).then((res) => setResponse(res));
  }, [id]);

  if (!response) return null;

  return (
    <CommentWrapper>
      <BlogUsername onClick={() => navigate(`/user/${response.user.id}`)}>
        {response?.user?.username || "loading..."}
      </BlogUsername>
      <BlogContent>{response.content}</BlogContent>
      <Responseform id={response.id} />
      {response?.responses &&
        response.responses.map((response) => {
          return <Response key={response} id={response} />;
        })}
    </CommentWrapper>
  );
};

const Responseform = ({ id }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState("");

  const submitResponse = async (e) => {
    e.preventDefault();
    await commentService.postResponse(id, response);
    setShowResponse(!showResponse);
    setResponse("");
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
