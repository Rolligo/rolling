import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import MainPage from "pages/MainPage";
import PaperListPage from "pages/PaperListPage";
import CreatePaperPage from "pages/CreatePaperPage";
import MessageListPage from "pages/MessageListPage";
import CreateMessagePage from "pages/CreateMessagePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="list" element={<PaperListPage />} />
        <Route path="post">
          <Route index element={<CreatePaperPage />} />
          <Route path=":id">
            <Route index element={<MessageListPage />} />
            <Route path="edit" element={<MessageListPage />} />
            <Route path="message" element={<CreateMessagePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
