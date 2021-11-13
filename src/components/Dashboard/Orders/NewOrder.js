import { Button, Container, Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const NewOrder = () => {
  return (
    <Grid container spacing={2}>
      <Grid xxl={4} xl={4} lg={4} md={4} sm={4} item>
        <div className="new-order-box">
          <div className="input-field">
            <label className="login-lable">Customer ID</label>
            <div className="new-order-inputs">
              <input type="text" className="new-order-input" />
              <AddCircleOutlineIcon className="new-customer-icon" />
            </div>
          </div>
          <div className="input-field">
            <label className="login-lable">Product ID</label>
            <div className="new-order-inputs">
              <input type="text" className="new-order-input" />
            </div>
          </div>
          <div className="input-field">
            <label className="login-lable">Quantity</label>
            <div className="new-order-inputs">
              <input type="number" className="new-order-input" />
            </div>
          </div>
          <div className="new-order-actions">
            <Button className="button-new-order" variant="contained">
              Generate Bill
            </Button>
            <Button className="button-new-order" variant="contained">
              Add Item
            </Button>
          </div>
        </div>
      </Grid>
      <Grid xxl={8} xl={8} lg={8} md={8} sm={8} item>
        <p className="login-lable">Proposed Sale</p>
        <div className="cart-grid">
          <Container maxWidth="xl">
            <div>Product 1</div>
            <div>Product 2</div>
            <div>Product 3</div>
          </Container>
        </div>
      </Grid>
    </Grid>
  );
};

export default NewOrder;
