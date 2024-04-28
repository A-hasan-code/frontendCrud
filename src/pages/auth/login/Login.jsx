import React, { useState } from "react";
import {
  MDBContainer,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCardBody,
  MDBCard,
} from "mdb-react-ui-kit";
import { useAuth } from "../../../components/hooks/Authcontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(email, password);
    if (success) {
      toast.success("Login successful"); // Notification toast
      history("/User"); // Navigate to dashboard
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <MDBIcon icon="envelope" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-4">
            <span className="input-group-text">
              <MDBIcon icon="lock" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="#!">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4" onClick={handleSubmit}>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
