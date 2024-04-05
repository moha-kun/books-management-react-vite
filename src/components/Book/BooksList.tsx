import { Table } from "react-bootstrap";
import { Book } from "../../models/Book";
import BooksListItem from "./BooksListItem";

function BooksList(props: {
  books: Book[];
  showLendButton: boolean;
  showReturnButton: boolean;
  showDeleteButton: boolean;
  showUpdateButton: boolean;
  handleDeleteBook: (id: number) => void;
  handleLendBook: (id: number) => void;
  handleReturnBook: (id: number) => void;
}) {
  const {
    books,
    showLendButton,
    showReturnButton,
    showUpdateButton,
    showDeleteButton,
    handleDeleteBook,
    handleLendBook,
    handleReturnBook,
  } = props;

  const booksList = books.map((book: Book) => {
    return (
      <BooksListItem
        key={book.id}
        book={book}
        showLendButton={showLendButton}
        showReturnButton={showReturnButton}
        showDeleteButton={showDeleteButton}
        showUpdateButton={showUpdateButton}
        handleDeleteBook={handleDeleteBook}
        handleLendBook={handleLendBook}
        handleReturnBook={handleReturnBook}
      />
    );
  });

  return (
    <Table className="table" striped hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Book Title</th>
          <th scope="col">Book Genre</th>
          <th scope="col">Book Author</th>
        </tr>
      </thead>
      <tbody>{booksList}</tbody>
    </Table>
  );
}

export default BooksList;
