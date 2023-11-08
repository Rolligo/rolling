import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import PostIdPage from "pages/PostIdPage";
import PaperListPage from "pages/PaperListPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<PaperListPage />} />
        <Route path="/post/:id" element={<PostIdPage />}>
          <Route path="edit" element={<PostIdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
