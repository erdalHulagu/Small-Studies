import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./pages/todos-page";
import CommentsPage from "./pages/comments-page";
import ContactPage from "./pages/contact-page";
import TodoHeader from "./components/todo-header/todo-header";

const App = () => {
  return (
      <BrowserRouter>
        <TodoHeader title="TODO Application" />
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
