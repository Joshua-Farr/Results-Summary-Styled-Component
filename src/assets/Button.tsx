import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  color: white;
  font-weight: 500;
  background-color: hsl(224, 30%, 27%);
  border: none;
  padding: 15px;
  border-radius: 25px;
  font-weight: 700;
  font-family: "Hanken Grotesk", sans-serif;

  &:hover {
    cursor: pointer;
    background-color: hsl(224, 30%, 50%);
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
