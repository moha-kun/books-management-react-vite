import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Book } from "../../models/Book";
import axios from "../../axios";

const LendBookComponent = (props: {
  show: boolean;
  handleLend: (bookId: number) => void;
  handleClose: () => void;
}) => {
  const { show, handleLend, handleClose } = props;
  const [selectedBook, setSelectedBook] = useState(0);
  const [availableBooks, setAvailableBooks] = useState<Book[]>([]);

  useEffect(() => {
    setUp();
  }, []);

  const setUp = () => {
    axios.get(`/books/available`).then((res) => setAvailableBooks(res.data));
    setSelectedBook(0);
  };

  const handleBookChange = (e: { target: { value: string } }) => {
    setSelectedBook(parseInt(e.target.value));
  };

  const availableBooksList = availableBooks.map((book) => {
    return (
      <option key={book.id} value={book.id}>
        {book.title}
      </option>
    );
  });

  return (
    <Modal onShow={setUp} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Lend Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="select"
          value={selectedBook}
          onChange={handleBookChange}
        >
          <option value={0}>Select User</option>
          {availableBooksList}
        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => handleLend(selectedBook)}
          disabled={!selectedBook}
        >
          Lend Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LendBookComponent;
