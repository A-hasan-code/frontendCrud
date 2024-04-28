import React, { useState, useEffect } from "react";
import { useAuth } from "../components/hooks/Authcontext";
import axios from "axios";
import { Card, CardHeader, Avatar, TextField, Button } from "@mui/material";
import Layout from "../components/layout/Layout";
const Profile = () => {
  const { user, getUser, updateUser } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });

  // Fetch user data when the component mounts
  useEffect(() => {
    getUser();
  }, []);

  // Update input fields when user data changes
  useEffect(() => {
    if (user) {
      setUserData({
        email: user.email,
        name: user.name,
      });
    }
  }, [user]);

  // Handle input change
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user._id) {
        console.error("User data incomplete:", user);
        return;
      }

      const success = await updateUser(user._id, userData);
      if (success) {
        console.log("User updated successfully");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Update user error:", error);
    }
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",

          height: "fit-content",
        }}
      >
        <Card
          sx={{ width: "50%", maxWidth: "medium", border: "1px solid #ccc" }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="user-avatar">
                {user && user.name ? user.name[0].toUpperCase() : ""}
              </Avatar>
            }
            title="Update Profile"
          />
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
