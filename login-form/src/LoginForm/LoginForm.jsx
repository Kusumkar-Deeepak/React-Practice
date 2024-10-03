import { useState } from "react";
import './RegistrationForm.css';
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      validatePasswordStrength(value);
    }
  };

  // Password Strength Meter
  const validatePasswordStrength = (password) => {
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;
    if (strongPassword.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  // Validation Logic
  const validateForm = () => {
    let formErrors = {};

    // Name validation
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    // Password validation
    if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    // Age validation
    if (!formData.age || isNaN(formData.age) || formData.age < 18) {
      formErrors.age = "Age must be a number and at least 18";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
      });
      setPasswordStrength("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      {/* Name Input */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Password Input */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {/* Password Strength Meter */}
        {passwordStrength && (
          <p
            style={{
              color:
                passwordStrength === "Strong"
                  ? "green"
                  : passwordStrength === "Medium"
                  ? "orange"
                  : "red",
            }}
          >
            Password strength: {passwordStrength}
          </p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}
      </div>

      {/* Age Input */}
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit">Register</button>
    </form>
  );
}
