import { Link, Outlet, Route, Routes } from "react-router-dom";
import DisplayUsersPage from "./DisplayUsersPage";
import ShowSingleUserPage from "./ShowSingleUserPage";
import UpdateUserPage from "./UpdateUserPage";

function UsersPage() {
  return (
    <main className="page-main">
      <Outlet />
      <Routes>
        <Route path="" element={<DisplayUsersPage />} />
        <Route
          path="add-new"
          element={
            <>
              <h1>Coming Soon ...</h1>
              <Link to="..">Go Back</Link>
            </>
          }
        />
        <Route path="show-single/:id" element={<ShowSingleUserPage />} />
        <Route path="update/:id" element={<UpdateUserPage />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </main>
  );
}

export default UsersPage;
