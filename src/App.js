
import { CssBaseline } from '@mui/material';
import './App.css';

import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Signup from './pages/auth/Signup/Signup.jsx'
import Login from './pages/auth/login/Login.jsx';
import User from './pages/User.jsx';
import ProtectedAdminRoute from './components/Routes/ProtectedRoutes.js'
import Product from './pages/Product.jsx';
import Profile from './pages/profile.jsx';
function App() {
  return (

    <Router> <CssBaseline />
    <Routes>  <Route path='/register' element={ <Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/User' element={<ProtectedAdminRoute><User/></ProtectedAdminRoute>}></Route>
    <Route path='/' element={<ProtectedAdminRoute><Dashboard/></ProtectedAdminRoute>}></Route>
    <Route path='/Profile' element={<ProtectedAdminRoute><Profile/></ProtectedAdminRoute>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
