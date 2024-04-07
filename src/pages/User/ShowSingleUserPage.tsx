import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import { User } from "../../models/User";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import { Book } from "../../models/Book";
import BooksList from "../../components/Book/BooksList";
import LendBookComponent from "../../components/Lending Service/LendBookComponent";

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function ShowSingleUserPage() {
  const [user, setUser] = useState<User>({} as User);
  const [books, setBooks] = useState<Book[]>([]);
  const [show, setShow] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`/users/${userId}`).then((res) => setUser(res.data));
    fetchBooksData();
  }, []);

  function fetchBooksData() {
    axios.get(`/lending/${userId}`).then((res) => setBooks(res.data));
  }

  const handleReturnBook = (bookId: number) => {
    axios
      .delete(`/lending?userId=${userId}&bookId=${bookId}`)
      .then(() => fetchBooksData());
  };

  const handleLendBook = (bookId: number) => {
    axios.post(`/lending?userId=${userId}&bookId=${bookId}`).then(() => {
      setShow((prevState) => !prevState);
      fetchBooksData();
    });
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="mb-4">User Details</h1>
        <Link to="..">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
      <div className="card">
        <div className="card-body">
          <div style={divStyle}>
            <div>
              <h6 className="card-text">First Name: {user.firstName}</h6>
              <h6 className="card-text">Last Name: {user.lastName}</h6>
            </div>
            <Link to="lending-service">
              <Button onClick={() => setShow((prevShow) => !prevShow)}>
                Lend Book
              </Button>
            </Link>
          </div>
          <h6 className="mt-3">List Of Borrowed Books</h6>
          <BooksList
            books={books}
            showLendButton={false}
            showReturnButton={true}
            showDeleteButton={false}
            showUpdateButton={false}
            handleDeleteBook={{} as (userId: number) => void}
            handleLendBook={{} as (userId: number) => void}
            handleReturnBook={handleReturnBook}
          />
        </div>
      </div>
      <Outlet />
      <Routes>
        <Route
          path="lending-service"
          element={
            <LendBookComponent
              handleLend={handleLendBook}
              handleClose={() => setShow((pervShow) => !pervShow)}
              show={show}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default ShowSingleUserPage;
