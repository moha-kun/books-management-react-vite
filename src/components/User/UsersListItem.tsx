import { Button } from "react-bootstrap";
import { User } from "../../models/User";
import { Link } from "react-router-dom";

function UsersListItem(props: {
  user: User;
  handleDeleteBook: (id: number) => void;
}) {
  const { user, handleDeleteBook } = props;

  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <Link to={`show-single/${user.id}`}>
          <Button variant="success">Details</Button>
        </Link>
      </td>
      <td>
        <Link to={`update/${user.id}`}>
          <Button variant="primary">Update</Button>
        </Link>
      </td>
      <td>
        <Button onClick={() => handleDeleteBook(user.id)} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default UsersListItem;
