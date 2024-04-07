import { Link, useNavigate } from "react-router-dom";
import UserForm from "../../components/User/UserForm";
import { Button } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../models/User";
import axios from "../../axios";

function CreateNewUserPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`/users`, user)
      .then(() => navigate(`..`));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <div className="page-header">
        <h1>Create New User</h1>
        <Link to="..">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
      <UserForm
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CreateNewUserPage;
