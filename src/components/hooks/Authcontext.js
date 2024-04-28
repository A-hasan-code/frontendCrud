import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import {server}  from './server';

const AuthContext = createContext();

const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))
  

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${server}api/login`, { email, password }, { withCredentials: true });
      
      setToken(res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      
      return res.data.success;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${server}api/logout`);
      setUser(null);
      setIsAuthenticated(false);
      removeToken();
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  };

  const getUser = async () => {
    try {
      const token = getToken();
      const res = await axios.get(`${server}api/getUser`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data.user)
      setUser(res.data.user);
    } catch (error) {
      console.error('Get user error:', error);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const token = getToken();
      const res = await axios.put(`${server}api/update-user/${id}`, userData, {   withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data.user)
      setUser(res.data.user);
      return res.data.success;
    } catch (error) {
      console.error('Update user error:', error);
      return false;
    }
  };

  const Users = async () => {
    try {
      const token = getToken();
      const res = await axios.get(`${server}api/Users`, {   withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.users;
    } catch (error) {
      console.error('Get all users error:', error);
      return [];
    }
  };

  const updateUserRole = async (id, role) => {
    try {
      const token = getToken();
      const res = await axios.put(`${server}api/updateUserRole/${id}`, { role }, {   withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.success;
    } catch (error) {
      console.error('Update user role error:', error);
      return false;
    }
  };

  const deleteUser = async (id) => {
    try {
      const token = getToken();
      const res = await axios.delete(`${server}api/deleteUser/${id}`, {   withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.success;
    } catch (error) {
      console.error('Delete user error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        getUser,
        updateUser,
      Users,
        updateUserRole,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
