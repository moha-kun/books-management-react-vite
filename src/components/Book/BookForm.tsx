import { ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { Book } from "../../models/Book";

const BookForm = (props: {book: Book, handleSubmit: (event: FormEvent<HTMLFormElement>) => void, handleChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {
    const {book, handleSubmit, handleChange} = props

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="genre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default BookForm;
