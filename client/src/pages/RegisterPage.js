import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { authActions } from "../redux/actions/user.actions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    dispatch(authActions.register(email, password));
  };

  return (
    <>
      <Form className="m-4">
        <Form.Group controlId="formBasicEmail" className="mb-4">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="text" placeholder="Your name" required />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mt-4">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Button
          onClick={onSignup}
          variant="warning"
          type="submit"
          className="mt-3"
        >
          Create your IMDB account
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="primary" size="sm" className="m-1">
            Sign-in
          </Button>
        </Link>
      </p>
    </>
  );
}

export { RegisterPage };
