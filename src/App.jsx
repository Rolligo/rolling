import Emoji from "components/Badges/Emoji";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  const style = {
    display: "flex",
    gap: "1rem",
    padding: "5rem",
  };
  return (
    <>
      <GlobalStyle />
      <div style={style}></div>
    </>
  );
}

export default App;
