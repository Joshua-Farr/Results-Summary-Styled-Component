import Summary from "./Summary";

function App() {
  return (
    <>
      <Summary text="reaction" score={80} />
      <Summary text="memory" score={92} />
      <Summary text="verbal" score={61} />
      <Summary text="visual" score={72} />
    </>
  );
}

export default App;
