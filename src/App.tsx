import Summary from "./Summary";
import Button from "./assets/Button";
import styled from "styled-components";

function App() {
  const SummaryContainer = styled.div`
    border: 2px solid red;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  `;

  const Title = styled.h2`
    color: black;
    margin-right: auto;
    font-size: 1.25rem;
    font-family: "Hanken Grotesk", sans-serif;
  `;

  return (
    <SummaryContainer>
      <Title>Summary</Title>
      <Summary
        text="Reaction"
        score={80}
        src="../../assets/images/icon-reaction.svg"
      />
      <Summary
        text="Memory"
        score={92}
        src="../../assets/images/icon-memory.svg"
      />
      <Summary
        text="Verbal"
        score={61}
        src="../../assets/images/icon-verbal.svg"
      />
      <Summary
        text="Visual"
        score={72}
        src="../../assets/images/icon-visual.svg"
      />
      <Button>Continue</Button>
    </SummaryContainer>
  );
}

export default App;
