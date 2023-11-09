import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/mainPage";
import PaperListPage from "pages/PaperListPage";
import BackgroundSelectPage from "pages/BackgroundSelectPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<PaperListPage />} />
        <Route path="/post" element={<BackgroundSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
