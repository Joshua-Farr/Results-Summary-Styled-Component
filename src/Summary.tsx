import styled from "styled-components";

const StyledSummary = styled.div`
  width: 320px;
  padding: 13px;
  border-radius: 10px;
  background-color: ${({ text }) => {
    if (text === "reaction") {
      return "#fff6f5";
    } else if (text === "memory") {
      return "#fffbf2";
    } else if (text === "verbal") {
      return "#f2fafa";
    } else if (text === "visual") {
      return "#f3f3fd";
    }
  }};

  color: ${({ text }) => {
    if (text === "reaction") {
      return "#d37f82";
    } else if (text === "memory") {
      return "#e7cd9a";
    } else if (text === "verbal") {
      return "#42b095";
    } else if (text === "visual") {
      return "#293399";
    }
  }};
`;

const StyledText = styled.h3`
  font-size: 400;
  margin: 0;
  font-family: sans-serif;
`;

const StyledScore = styled(StyledText)`
  color: #272d3d;
`;

const Summary = ({ text, score }) => {
  return (
    <StyledSummary text={text}>
      {score}/100
      <StyledText>{text}</StyledText>
    </StyledSummary>
  );
};

export default Summary;
