import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import userService from "../../services/userService";
import {
  PageWrapper,
  ElementWrapper,
  BlogTitle,
  BlogContent,
  BlogContentWrapper,
} from "css/BlogCss";
import {
  BlogPreview,
  Sh2,
  SBlogContentWrapper,
  BioTextArea,
  BioWrapper,
  EditBioButton,
} from "./Userpage.style";
import { useNavigate } from "react-router-dom";
import { textAreaAdjust } from "utils/textAreaAdjust";

const User = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  const { id } = useParams();
  useEffect(() => {
    userService.getById(id).then((res) => setUser(res));
  }, [id]);

  useEffect(() => {
    textAreaAdjust(ref);
  }, [editBio, editMode]);

  const handleEditBio = () => {
    userService
      .editUserBio(user.id, { bio: editBio })
      .then((res) => setUser(prev => ({...prev, bio: res.bio})));
    setEditMode(false);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
    setEditBio(user.bio);
  };

  if (!user) return null;

  return (
    <PageWrapper>
      <Sh2>{user.username}'s page</Sh2>
      <h3>About me</h3>

      <BioWrapper>
        {!editMode && (
          <BlogContentWrapper>
            {user.bio || "No description yet"}
          </BlogContentWrapper>
        )}

        {user.id === currentUser.id && editMode && (
          <>
            <BioTextArea
              ref={ref}
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
            />
          </>
        )}
        <EditBioButton onClick={handleEditMode}>
          {!editMode ? "Edit" : "Cancel"}
        </EditBioButton>
        {editMode && (
          <EditBioButton onClick={handleEditBio}>Save</EditBioButton>
        )}
      </BioWrapper>
      <h3>Entries</h3>
      {user.blogs.map((blog) => (
        <ElementWrapper key={blog.id}>
          <BlogPreview>
            <BlogTitle onClick={() => navigate(`/blogs/${blog.id}`)}>
              {blog.title}
            </BlogTitle>
            <SBlogContentWrapper>
              <BlogContent>{blog.content}</BlogContent>
            </SBlogContentWrapper>
          </BlogPreview>
        </ElementWrapper>
      ))}
    </PageWrapper>
  );
};

export default User;
