import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Book } from "../../models/Book";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import BookForm from "../../components/Book/BookForm";

function UpdateBookPage() {
  const {bookId} = useParams()
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    genre: "",
    available: true,
  });

  useEffect(() => {
    axios.get(`/books/${bookId}`).then(res => setBook(res.data))
  }, [])
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBook((prevBook) => {
      return {
        ...prevBook,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`/books/${bookId}`, book).then(() => navigate(".."));
  };

  return (
    <div>
      <div className="page-header">
        <h1>Create New Book</h1>
        <Link to="..">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
      <BookForm
        book={book}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default UpdateBookPage;
