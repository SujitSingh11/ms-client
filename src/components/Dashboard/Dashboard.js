import React, { useState } from "react";
import "../../styles/dashboard.css";
import { Container, Button, Divider } from "@mui/material";
import Header from "../Common/Header";
import Orders from "./Orders/Orders";
import Availability from "./Availability/Availability";
import Reports from "./Reports/Reports";

const Dashboard = () => {
  const [subNav, setSubNav] = useState(0);

  const handleNav = (nav) => {
    setSubNav(nav);
  };
  return (
    <>
      <Header />
      <Container maxWidth="xxl">
        <Divider className="divider" />
        <div className="dashboard-nav">
          <Button
            onClick={() => handleNav(0)}
            className="nav-links"
            variant="contained"
          >
            Orders
          </Button>
          <Button
            onClick={() => handleNav(1)}
            className="nav-links"
            variant="contained"
          >
            Availability
          </Button>
          <Button
            onClick={() => handleNav(2)}
            className="nav-links"
            variant="contained"
          >
            Reports
          </Button>
        </div>
        {subNav === 0 ? (
          <Orders />
        ) : subNav === 1 ? (
          <Availability />
        ) : (
          <Reports />
        )}
      </Container>
    </>
  );
};

export default Dashboard;
