import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (!repeatPassword.trim()) {
      errors.repeatPassword = "Repeat password is required";
    }

    if (password !== repeatPassword) {
      errors.password = "Passwords do not match";
      errors.repeatPassword = "Passwords do not match";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit form to backend API
      axios
        .post(`http://localhost:3003/api/register`, { name, email, password })
        .then((response) => {
          console.log("User registered successfully:", response.data);
          toast.success("User registered successfully");
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          toast.error("Error registering user: " + error.message);
        });
    }
  };

  const inputClassName = (fieldName) => {
    return formErrors[fieldName] ? "form-control is-invalid" : "form-control";
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form
                className="needs-validation"
                onSubmit={handleSubmit}
                noValidate
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="user" size="lg" className="me-3" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className={inputClassName("name")}
                    required
                    value={name}
                    onChange={handleName}
                  />
                  {formErrors.name && (
                    <div className="invalid-feedback">{formErrors.name}</div>
                  )}
                </div>

                <div className="mb-4 d-flex align-items-center">
                  <MDBIcon fas icon="envelope" size="lg" className="me-3" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    className={inputClassName("email")}
                    required
                    value={email}
                    onChange={handleEmail}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
                  )}
                </div>

                <div className="mb-4 d-flex align-items-center position-relative">
                  <MDBIcon fas icon="lock" size="lg" className="me-3" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type={passwordVisible ? "text" : "password"}
                    className={inputClassName("password")}
                    required
                    value={password}
                    onChange={handlePassword}
                  />
                  {formErrors.password && (
                    <div className="invalid-feedback">
                      {formErrors.password}
                    </div>
                  )}
                  <MDBIcon
                    fas
                    icon={passwordVisible ? "eye-slash" : "eye"}
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <div className="mb-4 d-flex align-items-center position-relative">
                  <MDBIcon fas icon="key" size="lg" className="me-3" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type={repeatPasswordVisible ? "text" : "password"}
                    className={inputClassName("repeatPassword")}
                    required
                    value={repeatPassword}
                    onChange={handleRepeatPassword}
                  />
                  {formErrors.repeatPassword && (
                    <div className="invalid-feedback">
                      {formErrors.repeatPassword}
                    </div>
                  )}
                  <MDBIcon
                    fas
                    icon={repeatPasswordVisible ? "eye-slash" : "eye"}
                    onClick={toggleRepeatPasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" type="submit">
                  Register
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
