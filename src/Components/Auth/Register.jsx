import { useEffect, useState } from "react";
import { fetchCountries } from "../../Utils/fetchCountries";
import Brand from "../Global/Brand";
import InputField from "../Global/InputField";
import SelectField from "../Global/SelectField";
import AuthTitle from "./AuthTitle";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    agree: false,
  });

  let navigate = useNavigate();

  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    getCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
                  title="Welcome to Tesla Stock Investments"
                  subtitle="Please sign up to continue..."
                />
              </center>
              <p>
                <small>
                  The asterisk(<span className="red">*</span>) signifies
                  required fields!
                </small>
              </p>
              <InputField
                label="Fullname"
                type="text"
                placeholder="Enter your fullname"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required={true}
              />
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
                label="Username"
                type="text"
                placeholder="Enter a unique username"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Phone Number"
                type="number"
                placeholder="Enter your phone number"
                name="phonenumber"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Country"
                name="country"
                id="country"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  handleChange(e);
                }}
                options={countries}
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
              <InputField
                label="Referral ID"
                type="text"
                placeholder="Referral ID (optional)"
                name="referral"
                id="referral"
              />
              <div className="auth-chk">
                <input
                  type="checkbox"
                  name="agree"
                  id="chk"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                &nbsp;
                <label htmlFor="chk">
                  I agree to{" "}
                  <a className="red" href="#">
                    privacy policy & terms
                  </a>
                </label>
              </div>
              <button type="submit" className="auth-btn">
                Register
              </button>
            </form>
            <center>
              <p>- Or -</p>
              <p className="link">
                <Link to="/"> Login into your account!</Link>
              </p>
            </center>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
