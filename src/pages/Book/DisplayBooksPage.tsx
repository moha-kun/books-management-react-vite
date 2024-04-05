import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BooksList from "../../components/Book/BooksList";
import { useEffect, useState } from "react";
import { Book } from "../../models/Book";
import axios from "../../axios";

function DisplayBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("/books").then((res) => setBooks(res.data));
  };

  const handleDeleteBook = (id: number) => {
    axios.delete(`/books/${id}`).then(() => {
      fetchData();
    });
  };

  return (
    <div>
      <div className="page-header">
        <h1>Books Management</h1>
        <Link to="add-new">
          <Button variant="primary">Create New</Button>
        </Link>
      </div>
      <BooksList
        books={books}
        showLendButton={false}
        showReturnButton={false}
        showDeleteButton={true}
        showUpdateButton={true}
        handleDeleteBook={handleDeleteBook}
        handleLendBook={{} as (id: number) => void}
        handleReturnBook={{} as (id: number) => void}
      />
    </div>
  );
}

export default DisplayBooksPage;
