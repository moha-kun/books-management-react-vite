import { Link, Outlet, Route, Routes } from "react-router-dom";
import DisplayBooksPage from "./DisplayBooksPage";
import UpdateBookPage from "./UpdateBookPage";

function BooksPage() {
  return (
    <main className="page-main">
      <Outlet />
      <Routes>
        <Route path="" element={<DisplayBooksPage />} />
        <Route
          path="add-new"
          element={
            <>
              <h1>Coming Soon ...</h1>
              <Link to="..">Go Back</Link>
            </>
          }
        />
        <Route path="update/:id" element={<UpdateBookPage />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </main>
  );
}

export default BooksPage;
