import { Table } from "react-bootstrap";
import { User } from "../../models/User";
import UsersListItem from "./UsersListItem";

function UsersList(props: {
  users: User[];
  handleDeleteBook: (id: number) => void;
}) {
  const { users, handleDeleteBook } = props;

  const usersList = users.map((user: User) => {
    return (
      <UsersListItem
        key={user.id}
        user={user}
        handleDeleteBook={handleDeleteBook}
      />
    );
  });

  return (
    <Table className="table" striped hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>{usersList}</tbody>
    </Table>
  );
}

export default UsersList;
