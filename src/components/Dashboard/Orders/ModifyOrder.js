import { Button } from "@mui/material";
import React from "react";

const ModifyOrder = () => {
  return (
    <div className="order-status-box">
      <div className="order-status-input-box">
        <label className="login-lable">Order ID</label>
        <input type="text" className="new-order-input" />
      </div>
      <Button className="button-new-order">Cancle Order</Button>
    </div>
  );
};

export default ModifyOrder;
