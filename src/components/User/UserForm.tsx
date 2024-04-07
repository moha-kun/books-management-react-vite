import { ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { User } from "../../models/User";

const UserForm = (props: {user: User, handleSubmit: (event: FormEvent<HTMLFormElement>) => void, handleChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {
    const {user, handleSubmit, handleChange} = props

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
