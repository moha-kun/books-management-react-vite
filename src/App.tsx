import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/Book/BooksPage";
import Header from "./components/Header/Header";
import UsersPage from "./pages/User/UsersPage";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/books/*" element={<BooksPage />} />
        <Route path="/users/*" element={<UsersPage />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
