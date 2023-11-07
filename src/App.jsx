import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import PostMessagePage from "pages/PostMessagePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/1/message" element={<PostMessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
