import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import PostIdPage from "pages/PostIdPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostIdPage />}>
          <Route path="edit" element={<PostIdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
