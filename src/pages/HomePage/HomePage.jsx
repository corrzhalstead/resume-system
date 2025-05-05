import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import styles from "./HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Card from "../../components/Card/Card";
import dummyData from "../../store/dummyData";

export function HomePage() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const dummyJwt =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      "eyJuYW1lIjoiVGVzdCBVc2VyIn0." +
      "dummysignature";

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
        localStorage.removeItem("token", dummyJwt);
      }
    } else {
      setUser(null);
    }
  }, []);

  console.log("DATA", dummyData);

  // function getYearsOfExperience(employments) {
  //   return employments?.reduce((total, job) => {
  //     const start = parseInt(job.yearStarted);
  //     const end = parseInt(job.yearEnd);
  //     return total + (end - start);
  //   }, 0);
  // }

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Welcome to HireFlow</h1>
        <p className={styles.description}>
          Track applications, schedule interviews, and manage your hiring
          pipeline with HireFlow.
        </p>

        {user ? (
          <div>
            {/* <h2 className={styles.welcomeUser}>
              👋 Welcome, {user?.name || "User"}!
            </h2> */}
            <div className={styles.actions}>
              <button
                onClick={() => navigate("/dashboard")}
                className={styles.button}
              >
                <span className={styles.icon}>📊 </span>Go to Dashboard
              </button>
              <button
                onClick={() => navigate("/create")}
                className={styles.button}
              >
                <span className={styles.icon}>➕ </span>Add New Applicant
              </button>
            </div>

            {dummyData.map((applicant, index) => (
              <Card
                key={index}
                applicants={applicant}
                onView={() => console.log("View", applicant.id)}
                onEdit={() => console.log("Edit", applicant.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.signInContainer}>
            <Link to="/signIn" className={styles.button}>
              <span className={styles.icon}>🔑 </span>Sign In to Get Started
            </Link>
            <p className={styles.noAccountText}>No account yet?</p>
            <Link to="/signup" className={styles.buttonSignUp}>
              <span className={styles.icon}>📝 </span>Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
