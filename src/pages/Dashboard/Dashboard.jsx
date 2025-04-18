import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [applicantStats, setApplicantStats] = useState({
    pending: 0,
    interviewing: 0,
    hired: 0,
    rejected: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDummyStats(); // Replace with API call later
    fetchDummyActivity();
  }, []);

  const fetchDummyStats = () => {
    setApplicantStats({ pending: 10, interviewing: 5, hired: 3, rejected: 2 });
  };

  const fetchDummyActivity = () => {
    setRecentActivity([
      { id: 1, text: "John Doe - Moved to Interviewing" },
      { id: 2, text: "Jane Smith - Hired!" },
      { id: 3, text: "Mike Brown - Application Rejected" },
    ]);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to HireFlow Dashboard</h2>

      {/* Quick Actions */}
      <div style={styles.actions}>
        <button
          onClick={() => navigate("/add-applicant")}
          style={styles.button}
        >
          ➕ Add New Applicant
        </button>
        <button onClick={() => navigate("/applicants")} style={styles.button}>
          📑 View All Applicants
        </button>
      </div>

      {/* Applicant Overview */}
      <div style={styles.stats}>
        <h3>Applicant Overview</h3>
        <ul>
          <li>🔵 Pending: {applicantStats.pending}</li>
          <li>🟠 Interviewing: {applicantStats.interviewing}</li>
          <li>✅ Hired: {applicantStats.hired}</li>
          <li>❌ Rejected: {applicantStats.rejected}</li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div style={styles.activity}>
        <h3>Recent Activity</h3>
        <ul>
          {recentActivity.map((activity) => (
            <li key={activity.id}>{activity.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  stats: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "left",
  },
  activity: {
    background: "#fff3cd",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "15px",
    textAlign: "left",
  },
};
