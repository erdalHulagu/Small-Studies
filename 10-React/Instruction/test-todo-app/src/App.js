import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./pages/todos-page";
import { Provider } from "react-redux";
import store from "./store";
import CommentsPage from "./pages/comments-page";
import ContactPage from "./pages/contact-page";
import TodoHeader from "./components/todo-header/todo-header";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TodoHeader title="TODO Application" />
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
