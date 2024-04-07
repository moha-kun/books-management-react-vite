import { Outlet, Route, Routes } from "react-router-dom";
import DisplayBooksPage from "./DisplayBooksPage";
import UpdateBookPage from "./UpdateBookPage";
import CreateNewBookPage from "./CreateNewBookPage";

function BooksPage() {
  return (
    <main className="page-main">
      <Outlet />
      <Routes>
        <Route path="" element={<DisplayBooksPage />} />
        <Route
          path="add-new"
          element={<CreateNewBookPage />}
        />
        <Route path="update/:bookId" element={<UpdateBookPage />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </main>
  );
}

export default BooksPage;
