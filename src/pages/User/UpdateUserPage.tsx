import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../../models/User";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import UserForm from "../../components/User/UserForm";

function UpdateUserPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    axios.get(`/users/${userId}`).then((res) => setUser(res.data));
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.put(`/users/${userId}`, user).then(() => navigate(`..`));
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

export default UpdateUserPage;
