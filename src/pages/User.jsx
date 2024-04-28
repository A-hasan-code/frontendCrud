import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";
import { useAuth } from "../components/hooks/Authcontext";
import Layout from "../components/layout/Layout";
const User = () => {
  const { Users, updateUserRole, deleteUser } = useAuth();

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await Users();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [Users]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteUser = async (id) => {
    try {
      const success = await deleteUser(id);
      if (success) {
        setUsers(users.filter((user) => user._id !== id));
        console.log("Successfully deleted user.");
      } else {
        console.error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUpdateRole = async () => {
    try {
      const success = await updateUserRole(selectedUser._id, role);
      if (success) {
        setUsers(
          users.map((user) =>
            user._id === selectedUser._id ? { ...user, role } : user
          )
        );
        handleCloseDialog();
        console.log("Successfully updated user role.");
      } else {
        console.error("Failed to update user role.");
      }
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  return (
    <Layout>
      <TextField
        label="Filter by Name or Email"
        value={filter}
        onChange={handleFilterChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleViewUser(user)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Update User Role</DialogTitle>
        <DialogContent>
          <TextField
            select
            label="Role"
            value={role}
            onChange={handleRoleChange}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleUpdateRole} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default User;
