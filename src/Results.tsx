import styled from "styled-components";

const StyledResults = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    hsl(252, 100%, 67%),
    hsl(241, 81%, 54%)
  );
  border-radius: 10px;
  padding: 1em;
  font-family: "Hanken Grotesk", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

const StyledScore = styled.div`
  color: white;
  font-size: 2.75rem;
  background-image: linear-gradient(
    to bottom,
    hsla(256, 72%, 46%, 1),
    hsla(241, 72%, 46%, 0)
  );
  border-radius: 50%;
  text-align: center;
  height: 100px;
  width: 100px;
  margin: 0.25em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Typography = styled.h2`
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 0;
  font-weight: ${({ fontWeight }) => {
    if (fontWeight === "light") {
      return 100;
    } else {
      return 700;
    }
  }};
  text-overflow: ellipsis;
  max-width: 200px;
`;

const Results = ({ score }) => {
  return (
    <StyledResults>
      Your Result
      <StyledScore>
        {score}
        <Typography fontSize={12} fontWeight="light">
          out of 100
        </Typography>
      </StyledScore>
      <Typography fontSize={30}>Great</Typography>
      <Typography fontSize={12} fontWeight="light">
        You scored higher than 65% of the people who have taken these tests.
      </Typography>
    </StyledResults>
  );
};

export default Results;
