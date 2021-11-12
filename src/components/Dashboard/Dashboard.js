import React from "react";
import "../../styles/dashboard.css";
import { Container, Button, Divider } from "@mui/material";
import Header from "../Common/Header";
import Orders from "./Orders/Orders";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xxl">
        <Divider className="divider" />
        <div className="dashboard-nav">
          <Button className="nav-links" variant="contained">
            Orders
          </Button>
          <Button className="nav-links" variant="contained">
            Availability
          </Button>
          <Button className="nav-links" variant="contained">
            Reports
          </Button>
        </div>
        <Orders />
      </Container>
    </>
  );
};

export default Dashboard;
