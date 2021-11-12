import "../../styles/login.css";
import React from "react";
import { Button, Container } from "@mui/material";
import Header from "../Common/Header";

const Login = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xs">
        <div className="login-box">
          <div className="login">
            <h1 className="login-header">Login</h1>
            <div className="input-field">
              <lable className="login-lable">Email ID/ Username</lable>
              <input className="input" />
            </div>
            <div className="input-field">
              <lable className="login-lable">Password</lable>
              <input className="input" />
            </div>
            <div className="login-footer">
              <Button className="button" variant="contained">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
