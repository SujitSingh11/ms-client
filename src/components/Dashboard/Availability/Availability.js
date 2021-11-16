import React from "react";
import { Button, Container } from "@mui/material";
import "../../../styles/availability.css";

const Availability = () => {
  return (
    <div className="orders-grid">
      <Container maxWidth="xl">
        <div className="top-padding">
          <div className="order-status-box">
            <div className="order-status-input-box">
              <label className="login-lable">Product ID</label>
              <input type="text" className="new-order-input" />
            </div>
            <Button className="button-new-order">Check </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Availability;
