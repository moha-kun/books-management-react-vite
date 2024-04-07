import { Button } from "react-bootstrap";
import { Book } from "../../models/Book";
import { Link } from "react-router-dom";

function BooksListItem(props: {
  book: Book;
  showLendButton: boolean;
  showReturnButton: boolean;
  showDeleteButton: boolean;
  showUpdateButton: boolean;
  handleDeleteBook: (id: number) => void;
  handleLendBook: (id: number) => void;
  handleReturnBook: (id: number) => void;
}) {
  const {
    book,
    showLendButton,
    showReturnButton,
    showUpdateButton,
    showDeleteButton,
    handleDeleteBook,
    handleLendBook,
    handleReturnBook,
  } = props;

  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.genre}</td>
      <td>{book.author}</td>
      <td>{showUpdateButton && (book.available ? 'Available' : 'Borrowed')}</td>
      <td>
        {showLendButton && (
          <Button onClick={() => handleLendBook(book.id)} variant="success">
            Lend Book
          </Button>
        )}
      </td>
      <td>
        {showReturnButton && (
          <Button onClick={() => handleReturnBook(book.id)} variant="secondary">
            Return Book
          </Button>
        )}
      </td>
      <td>
        {showUpdateButton && (
          <Link to={`update/${book.id}`}>
            <Button variant="primary">
              Update
            </Button>
          </Link>
        )}
      </td>
      <td>
        {showDeleteButton && (
          <Button onClick={() => handleDeleteBook(book.id)} variant="danger">
            Delete
          </Button>
        )}
      </td>
    </tr>
  );
}

export default BooksListItem;
