import styled from "styled-components";

const StyledSummary = styled.div`
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  margin-bottom: 1em;
  background-color: ${({ text }) => {
    if (text === "Reaction") {
      return "#fff6f5";
    } else if (text === "Memory") {
      return "#fffbf2";
    } else if (text === "Verbal") {
      return "#f2fafa";
    } else if (text === "Visual") {
      return "#f3f3fd";
    }
  }};

  color: ${({ text }) => {
    if (text === "Reaction") {
      return "#d37f82";
    } else if (text === "Memory") {
      return "#e7cd9a";
    } else if (text === "Verbal") {
      return "#42b095";
    } else if (text === "Visual") {
      return "#293399";
    }
    return "#272d3d";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.h3`
  font-weight: 700;
  margin: 0;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 1.25rem;
  text-align: left;
  margin-left: 10px;
`;

const StyledScore = styled(StyledText)`
  color: #272d3d;
  font-size: 1rem;
  margin-left: auto;
  font-weight: 800;
`;

const StyledImg = styled.img``;

const Summary = ({ text, score, src }) => {
  return (
    <StyledSummary text={text}>
      <StyledImg src={src} />
      <StyledText>{text}</StyledText>
      <StyledScore>{score} / 100</StyledScore>
    </StyledSummary>
  );
};

export default Summary;
