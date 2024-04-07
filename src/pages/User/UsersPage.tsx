import { Outlet, Route, Routes } from "react-router-dom";
import DisplayUsersPage from "./DisplayUsersPage";
import ShowSingleUserPage from "./ShowSingleUserPage";
import UpdateUserPage from "./UpdateUserPage";
import CreateNewUserPage from "./CreateNewUserPage";

function UsersPage() {
  return (
    <main className="page-main">
      <Outlet />
      <Routes>
        <Route path="" element={<DisplayUsersPage />} />
        <Route path="add-new" element={<CreateNewUserPage />} />
        <Route path="show-single/:userId/*" element={<ShowSingleUserPage />} />
        <Route path="update/:userId" element={<UpdateUserPage />} />
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </main>
  );
}

export default UsersPage;
