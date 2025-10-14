import React, { useState, useEffect, useMemo, useCallback } from "react";
import NavBar from "../../components/NavBar";
import styles from "./HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Card from "../../components/Card/Card";
// import dummyData from "../../store/dummyData";
import fakeResumes from "../../store/fakeResumes";

import FilterMenu from "../../components/FilterMenu/FilterMenu";
import Pagination from "../../components/Pagination/Pagination";

export function HomePage() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "",
    jobTitle: "",
    experience: "",
    searchTerm: "",
  });

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

  // console.log("DATA", dummyData);
  console.log("DATA", fakeResumes);

  const handleFilterChange = useCallback((nextFilters) => {
    const sanitizedFilters = { ...nextFilters };

    if (!sanitizedFilters.category && !sanitizedFilters.jobTitle) {
      sanitizedFilters.experience = "";
    }

    setFilters(sanitizedFilters);
    setCurrentPage(1);
  }, []);

  const matchesFilters = useCallback(
    (applicant) => {
      const term = filters.searchTerm.trim().toLowerCase();

      const matchesCategory =
        !filters.category || applicant.jobCategory === filters.category;
      const matchesJobTitle =
        !filters.jobTitle || applicant.jobTitle === filters.jobTitle;
      const matchesSearch =
        !term ||
        `${applicant.firstName} ${applicant.lastName} ${
          applicant.email ?? ""
        } ${applicant.jobTitle ?? ""}`
          .toLowerCase()
          .includes(term);

      const experienceValue = calculateExperience(applicant.employments);
      const matchesExperience = experienceMatchesRange(
        experienceValue,
        filters.experience
      );

      return (
        matchesCategory && matchesJobTitle && matchesSearch && matchesExperience
      );
    },
    [filters]
  );

  const filteredApplicants = useMemo(
    () => fakeResumes.filter((applicant) => matchesFilters(applicant)),
    [matchesFilters]
  );

  const PAGE_SIZE = 10;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplicants.length / PAGE_SIZE)
  );
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedApplicants = filteredApplicants.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function calculateExperience(employments = []) {
    if (!Array.isArray(employments) || employments.length === 0) {
      return 0;
    }

    return employments.reduce((total, job) => {
      const startRaw = job?.yearStarted;
      if (!startRaw) {
        return total;
      }

      const startDate = new Date(startRaw);
      if (Number.isNaN(startDate.getTime())) {
        return total;
      }

      const endRaw = job?.yearEnd;
      let endDate;

      if (typeof endRaw === "string" && endRaw.toLowerCase() === "present") {
        endDate = new Date();
      } else if (endRaw) {
        const parsedEnd = new Date(endRaw);
        endDate = Number.isNaN(parsedEnd.getTime()) ? new Date() : parsedEnd;
      } else {
        endDate = new Date();
      }

      const years = endDate.getFullYear() - startDate.getFullYear();
      const months = endDate.getMonth() - startDate.getMonth();

      const totalYears = years + (months < 0 ? -1 : 0);
      const totalMonths = months < 0 ? 12 + months : months;

      const experience = totalYears + totalMonths / 12;
      const positiveExperience = Math.max(experience, 0);

      return total + positiveExperience;
    }, 0);
  }

  function experienceMatchesRange(value, range) {
    if (!range) {
      return true;
    }

    if (!Number.isFinite(value)) {
      return false;
    }

    switch (range) {
      case "0-1":
        return value >= 0 && value < 2;
      case "2-4":
        return value >= 2 && value < 5;
      case "5-7":
        return value >= 5 && value < 8;
      case "8+":
        return value >= 8;
      default:
        return true;
    }
  }

  function formatExperience(years) {
    if (!Number.isFinite(years)) {
      return "0";
    }

    const rounded = Math.max(0, years);
    return Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1);
  }

  function getYearsOfExperience(employments) {
    const totalExperience = calculateExperience(employments);
    return formatExperience(totalExperience);
  }

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.topContainer}> */}
        {user && (
          <div className={styles.topContainer}>
            <h1>Find and Manage Applicants</h1>
            <p className={styles.description}>
              Search applicants by name, role, or status.
            </p>

            <div className={styles.actions}>
              <button
                onClick={() => navigate("/dashboard")}
                className={styles.dashboardBtn}
              >
                <span className={styles.icon}>📊 </span>Go to Dashboard
              </button>
              <button
                onClick={() => navigate("/create")}
                className={styles.addBtn}
              >
                <span className={styles.icon}>➕ </span>Add New Applicant
              </button>
            </div>

            <div className={styles.filterContainer}>
              <FilterMenu onFilter={handleFilterChange} />
            </div>

            <div className={styles.innerContent}>
              <div>
                <Pagination
                  page={currentPage}
                  lastPage={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>

              <div className={styles.headerContainer}>
                <div className={styles.name}>Name</div>
                <div>Email</div>
                <div>Contact Number</div>
                <div>Position</div>
                <div>Years Of Experience</div>
              </div>

              <div className={styles.cardContainer}>
                {paginatedApplicants.map((applicant, index) => {
                  const yearsOfExperience = getYearsOfExperience(
                    applicant.employments
                  );

                  return (
                    <div
                      key={applicant.id ?? index}
                      className={`${styles.cardItem} ${
                        index % 2 === 0 ? styles.striped : ""
                      }`}
                    >
                      <Card
                        applicants={{ ...applicant, yearsOfExperience }}
                        onView={() => console.log("View", applicant.id)}
                        onEdit={() => console.log("Edit", applicant.id)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className={styles.welcomeContainer}>
          <h1>Welcome to Agos Recruit</h1>
          <p className={styles.description}>
            {/* Track applications, schedule interviews, and manage your hiring
            process. */}
            Manage applications, monitor progress, and prepare for deployment.
          </p>

          <div className={styles.signInContainer}>
            <Link to="/signIn" className={styles.buttonSignUp}>
              <span className={styles.icon}>🔑 </span>Sign In to Get Started
            </Link>
            <p className={styles.noAccountText}>No account yet?</p>
            <Link to="/signup" className={styles.buttonSignUp}>
              <span className={styles.icon}>📝 </span>Sign Up
            </Link>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
}
