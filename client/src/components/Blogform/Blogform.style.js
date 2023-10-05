import styled from "styled-components";

export const Sh2 = styled.h2`
  text-align: center;
  font-size: 50px;
  margin: 0px;
  margin-bottom: 1.5rem;
  @media (max-width: 700px) {
    font-size: 40px;
    line-height: 0px;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTitleArea = styled.textarea`
  text-align: center;
  font-size: 30px;
  font-style: italic;
  color: white;
  width: 750px;

  background: transparent;
  border: none;
  border-bottom: 3px solid white;

  resize: none;
  padding: 0;
  margin-bottom: 2vh;
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    width: 90%;
    font-size: 20px;
    margin-top: 1rem;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 70%;
  height: 75vh;
  resize: none;
  padding: 0.2rem;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  resize: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    height: 60vh;
    width: 90%;
  }
`;

export const StyledButton = styled.button`
  width: 5rem;
  font-size: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;