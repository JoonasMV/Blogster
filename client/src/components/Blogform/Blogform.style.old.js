import styled from "styled-components"

export const FormWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  height: calc(100vh - 65px);
  box-sizing: border-box;
  border: 2px solid red;
`

export const Sh2 = styled.h2`
  text-align: center;
  font-size: 50px;
  margin: 0px;
  margin-bottom: 1.5rem;
  @media (max-width: 700px) {
    font-size: 40px;
    line-height: 0px;
  }
`

export const StyledForm = styled.form`
  /* height: 100%; */
`

export const TextAreaWrapper = styled.div`
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  /* box-sizing: border-box; */
  /* height: 100%; */
`

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
`

export const StyledTextArea = styled.textarea`
  width: 70%;
  resize: none;
  height: 100%;
  flex: 1;
  padding: 0.2rem;
  box-sizing: border-box;
  height: 100%;
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
`

export const StyledButton = styled.button`
  width: 5rem;
  font-size: 15px;
`
