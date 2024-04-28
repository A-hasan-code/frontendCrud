import React from "react";
import { Card, CardContent, Typography, Grid, Icon } from "@mui/material"; // Import necessary components from Material-UI
import {
  FaUsers,
  FaBox,
  FaClipboardList,
  FaMoneyBillAlt,
} from "react-icons/fa"; // Import icons
import Layout from "../components/layout/Layout";
const Dashboard = () => {
  // Dummy data
  const totalUsers = 100;
  const totalProducts = 50;
  const totalOrders = 200;
  const totalSales = 5000;

  return (
    <Layout>
      <Grid container spacing={3}>
        {/* Card for total number of users */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Icon
                  component={FaUsers}
                  sx={{ fontSize: 30, marginRight: 1 }}
                />{" "}
                Total Users
              </Typography>
              <Typography variant="h4">{totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for total number of products */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Icon component={FaBox} sx={{ fontSize: 30, marginRight: 1 }} />{" "}
                Total Products
              </Typography>
              <Typography variant="h4">{totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for total number of orders */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Icon
                  component={FaClipboardList}
                  sx={{ fontSize: 30, marginRight: 1 }}
                />{" "}
                Total Orders
              </Typography>
              <Typography variant="h4">{totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for total sales */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Icon
                  component={FaMoneyBillAlt}
                  sx={{ fontSize: 30, marginRight: 1 }}
                />{" "}
                Total Sales
              </Typography>
              <Typography variant="h4">{`$${totalSales}`}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
