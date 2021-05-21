import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { authActions } from "../redux/actions/user.actions";
import { Redirect } from "react-router-dom";

function AuthPage() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = (e) => {
    e.preventDefault();
    dispatch(authActions.register(email, password));
  };

  if (user.loading) return <h1>Registering...</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={onSignup} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export { AuthPage };
