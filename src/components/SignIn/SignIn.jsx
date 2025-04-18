import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const response = await axios.post("http://localhost:5000/auth/login", {
  //       email,
  //       password,
  //     });
  //     localStorage.setItem("token", response.data.token);
  //     navigate("/dashboard"); // Redirect after login
  //   } catch (err) {
  //     setError("Invalid email or password.");
  //   }
  // };

  const handleDummyLogin = (e) => {
    e.preventDefault();
    setError("");

    // Dummy user credentials
    const dummyUser = {
      email: "test@hireflow.com",
      password: "password123",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      // Simulate token storage (replace with real JWT later)
      localStorage.setItem("token", "dummy-token");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.signIn}>Sign In to HireFlow</h2>
      {error && <p className={styles.error}>{error}</p>}
      {/* <form onSubmit={handleLogin} className={styles.form}> */}
      <form onSubmit={handleDummyLogin} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
