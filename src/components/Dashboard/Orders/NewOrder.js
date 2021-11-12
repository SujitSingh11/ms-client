import { Button, Container } from "@mui/material";
import React from "react";

const NewOrder = () => {
  return (
    <Container maxWidth="lg">
      <div className="new-order-box">
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
    </Container>
  );
};

export default NewOrder;
