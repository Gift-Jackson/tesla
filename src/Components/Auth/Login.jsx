import { useState } from "react";
import Brand from "../Global/Brand";
import InputField from "../Global/InputField";
import AuthTitle from "./AuthTitle";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Tesla Stocks | Login"
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form or perform actions

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
    }
    navigate("/dashboard/overview");
    console.log("Form submitted successfully", formData);
  };
  return (
    <>
      <main>
        <div className="auth-container">
          <center>
            <Brand size={35} />
          </center>

          <div className="auth-form">
            <form onSubmit={handleSubmit}>
              <center>
                <AuthTitle
                  title="Welcome Back"
                  subtitle="Please login to continue..."
                />
              </center>
              <p>
                <small>
                  The asterisk(<span className="red">*</span>) signifies
                  required fields!
                </small>
              </p>
              <InputField
                label="E-mail Address"
                type="email"
                placeholder="Enter e-mail address"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Not less 6 characters"
                name="password"
                id="pwd"
                value={formData.password}
                onChange={handleChange}
                required={true}
              />
              <p className="forgot-pwd">
                <a href="#">Forgot password?</a>
              </p>
              <button type="submit" className="auth-btn">
                Login
              </button>
            </form>
            <center>
              <p>- Or -</p>
              <p className="link">
                <Link to="/register"> Create an account!</Link>
              </p>
            </center>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
