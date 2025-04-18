import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import styles from "./HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// export function HomePage() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   return (
//     <div className={styles.container}>
//       <div className={styles.topContainer}>
//         <h1>Welcome to HireFlow</h1>
//         <p className={styles.description}>
//           Track applications, schedule interviews, and manage your hiring
//           pipeline with HireFlow.
//           {/* Track applicants and manage hiring seamlessly */}
//         </p>

//         {token ? (
//           <>
//             <div className={styles.actions}>
//               <button
//                 onClick={() => navigate("/dashboard")}
//                 className={styles.button}
//               >
//                 <span className={styles.icon}>📊 </span>Go to Dashboard
//               </button>
//               <button
//                 onClick={() => navigate("/add-applicant")}
//                 className={styles.button}
//               >
//                 <span className={styles.icon}>➕ </span>Add New Applicant
//               </button>
//             </div>
//             {/*
//           {applicantStats && (
//             <div style={styles.stats}>
//               <h2>Applicant Overview</h2>
//               <ul>
//                 <li>Pending: {applicantStats.pending} 🔵</li>
//                 <li>Interviewing: {applicantStats.interviewing} 🟠</li>
//                 <li>Hired: {applicantStats.hired} ✅</li>
//                 <li>Rejected: {applicantStats.rejected} ❌</li>
//               </ul>
//             </div>
//           )} */}
//           </>
//         ) : (
//           <div className={styles.actions}>
//             <Link to="/signIn" className={styles.button}>
//               <span className={styles.icon}>🔑 </span>Sign In to Get Started
//             </Link>

//             <p className={styles.noAccountText}>No account yet?</p>

//             <Link to="/signup" className={styles.buttonSignUp}>
//               <span className={styles.icon}>📝 </span>Sign Up
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export function HomePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // Store user details from token
      } catch (error) {
        console.error("Invalid token");
        setUser(null);
      }
    }
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Welcome to HireFlow</h1>
        <p className={styles.description}>
          Track applications, schedule interviews, and manage your hiring
          pipeline with HireFlow.
        </p>

        {token ? (
          <>
            <h2 className={styles.welcomeUser}>
              👋 Welcome, {user?.name || "User"}!
            </h2>
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
          </>
        ) : (
          <div className={styles.actions}>
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
