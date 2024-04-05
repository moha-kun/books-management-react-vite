import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "../../models/User";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import { Book } from "../../models/Book";
import BooksList from "../../components/Book/BooksList";

function ShowSingleUserPage() {
  const [user, setUser] = useState<User>({} as User);
  const [books, setBooks] = useState<Book[]>([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`/users/${id}`).then((res) => setUser(res.data));
    axios.get(`/lending/${id}`).then((res) => setBooks(res.data));
  }, []);

  const handleReturnBook = (id: number) => {
    console.log(id);
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
          <p className="card-text">First Name: {user.firstName}</p>
          <p className="card-text">Last Name: {user.lastName}</p>
        <BooksList
          books={books}
          showLendButton={false}
          showReturnButton={true}
          showDeleteButton={false}
          showUpdateButton={false}
          handleDeleteBook={{} as (id: number) => void}
          handleLendBook={{} as (id: number) => void}
          handleReturnBook={handleReturnBook}
        />
        </div>
      </div>
    </div>
  );
}

export default ShowSingleUserPage;
