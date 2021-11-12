import React from "react";
import "../../../styles/orders.css";
import { Grid } from "@mui/material";
import NewOrder from "./NewOrder";

const Orders = () => {
  return (
    <Grid container className="orders-grid">
      <Grid
        item
        xxl={2}
        xl={2}
        lg={2}
        md={2}
        sm={2}
        className="orders-grid-nav"
      >
        <div className="orders-nav">
          <p className="orders-nav-p">New Order</p>
        </div>
        <div className="orders-nav">
          <p className="orders-nav-p">Modify Order</p>
        </div>
        <div className="orders-nav">
          <p className="orders-nav-p">Order Status</p>
        </div>
      </Grid>
      <Grid
        item
        xxl={10}
        xl={10}
        lg={10}
        md={10}
        sm={10}
        className="orders-content"
      >
        <NewOrder />
      </Grid>
    </Grid>
  );
};

export default Orders;
