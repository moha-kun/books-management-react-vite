import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BookForm from "../../components/Book/BookForm";
import { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "../../models/Book";
import axios from "../../axios";

function CreateNewBookPage() {
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    genre: "",
    available: true,
  });

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
    axios.post(`/books`, book).then(() => navigate('..'))
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

export default CreateNewBookPage;
