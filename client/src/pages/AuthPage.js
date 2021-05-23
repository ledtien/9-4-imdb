import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { authActions } from "../redux/actions/user.actions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function AuthPage() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    dispatch(authActions.login(email, password));
  };

  if (user.loading) return <h1>Loading...</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  return (
    <>
      <Form className="m-4">
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          onClick={onSignup}
          variant="warning"
          type="submit"
          className="mt-3"
        >
          Sign-in
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to="/register">
          <Button variant="primary" size="sm" className="m-1">
            Sign-up
          </Button>
        </Link>
      </p>
    </>
  );
}

export { AuthPage };
