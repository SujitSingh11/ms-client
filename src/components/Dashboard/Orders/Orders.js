import React, { useState } from "react";
import "../../../styles/orders.css";
import { Container, Grid } from "@mui/material";
import NewOrder from "./NewOrder";
import ModifyOrder from "./ModifyOrder";
import OrderStatus from "./OrderStatus";

const Orders = () => {
  const [subNav, setSubNav] = useState(0);

  const handleNav = (nav) => {
    setSubNav(nav);
  };

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
        <div onClick={() => handleNav(0)} className="orders-nav">
          <p className="orders-nav-p">New Order</p>
        </div>
        <div onClick={() => handleNav(1)} className="orders-nav">
          <p className="orders-nav-p">Modify Order</p>
        </div>
        <div onClick={() => handleNav(2)} className="orders-nav">
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
        <Container maxWidth="xl">
          {subNav === 0 ? (
            <NewOrder />
          ) : subNav === 1 ? (
            <ModifyOrder />
          ) : (
            <OrderStatus />
          )}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Orders;
