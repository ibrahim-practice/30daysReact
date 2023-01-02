import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const handleNameChange = (e) => {
    setUser({ name: e.target.value, email, password });
  };
  const handleEmailChange = (e) => {
    setUser({ name, email: e.target.value, password });
  };
  const handlePasswordChange = (e) => {
    setUser({ name, password: e.target.value, email });
  };
  const handleSubmit = (e) => {
    console.log("Form is submitted");
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
