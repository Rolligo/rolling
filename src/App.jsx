import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import PostIdPage from "pages/PostIdPage";
import PostMessagePage from "pages/PostMessagePage";
import PaperListPage from "pages/PaperListPage";
import BackgroundSelectPage from "pages/BackgroundSelectPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="list" element={<PaperListPage />} />
        <Route path="post">
          <Route index element={<BackgroundSelectPage />} />
          <Route path=":id">
            <Route index element={<PostIdPage />} />
            <Route path="edit" element={<PostIdPage />} />
            <Route path="message" element={<PostMessagePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
