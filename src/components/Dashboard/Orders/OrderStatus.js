import { Button } from "@mui/material";
import React from "react";

const OrderStatus = () => {
  return (
    <div className="order-status-box">
      <div className="order-status-input-box">
        <label className="login-lable">Order ID</label>
        <input type="text" className="new-order-input" />
      </div>
      <Button className="button-new-order">Check Status</Button>
    </div>
  );
};

export default OrderStatus;
