import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ExecutiveReports from "./ExecutiveReports";
import OperationalReports from "./OperationalReports";

const Reports = () => {
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
          <p className="orders-nav-p">Operational Reports</p>
        </div>
        <div onClick={() => handleNav(1)} className="orders-nav">
          <p className="orders-nav-p">Executive Reports</p>
        </div>
        <div onClick={() => handleNav(2)} className="orders-nav">
          <p className="orders-nav-p">Strategic Reports</p>
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
            <OperationalReports />
          ) : subNav === 1 ? (
            <ExecutiveReports />
          ) : (
            <OperationalReports />
          )}
        </Container>
      </Grid>
    </Grid>
  );
};

export default Reports;
