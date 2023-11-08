import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import BackgroundSelectPage from "pages/BackgroundSelectPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
