import React, { useEffect, useState } from "react";
import styles from "./FilterMenu.module.css";
import InputItem from "../InputItem";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const jobData = {
  Engineering: ["Frontend Developer", "Backend Developer", "Full Stack"],
  Design: ["UI Designer", "UX Designer", "Graphic Designer"],
  Marketing: ["Content Strategist", "SEO Specialist", "Digital Marketer"],
  HR: ["Recruiter", "HR Generalist", "Talent Acquisition"],
};

export default function FilterMenu({ onFilter }) {
  const [category, setCategory] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [availableJobTitles, setAvailableJobTitles] = useState([]);

  useEffect(() => {
    if (category) {
      setAvailableJobTitles(jobData[category] || []);
      setJobTitle("");
    } else {
      setAvailableJobTitles([]);
    }
  }, [category]);

  const handleFilterChange = () => {
    onFilter({
      category,
      jobTitle,
      experience,
      searchTerm,
    });
  };

  const handleReset = () => {
    setCategory("");
    setJobTitle("");
    setExperience("");
    setSearchTerm("");
    onFilter({ category: "", jobTitle: "", experience: "", searchTerm: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label className={styles.label}>Job Category</label>
        <div className={`${styles.selectWrapper}`}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Job Category</option>
            {Object.keys(jobData).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles.chevronIcon}
          />
        </div>
      </div>

      <div className={styles.filterContainer}>
        <label className={styles.label}>Job Title</label>
        <div className={`${styles.selectWrapper}`}>
          <select
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            disabled={!category}
          >
            <option value="">Job Title</option>
            {availableJobTitles.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles.chevronIcon}
          />
        </div>
      </div>

      <div className={styles.filterContainer}>
        <label className={styles.label}>Experience</label>
        <div className={`${styles.selectWrapper}`}>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">Experience</option>
            <option value="0-1">0 – 1 years</option>
            <option value="2-4">2 – 4 years</option>
            <option value="5-7">5 – 7 years</option>
            <option value="8+">8+ years</option>
          </select>

          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles.chevronIcon}
          />
        </div>
      </div>

      <div className={styles.filterContainer}>
        {/* <InputItem
          label="Search"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search}
        /> */}
        <label className={styles.label}>Search</label>

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search}
        />
      </div>

      <div className={styles.btnContainer}>
        <Button
          className={styles.applyButton}
          label={"🔎 Filter"}
          onClick={handleFilterChange}
        />

        <Button
          className={styles.resetButton}
          label={"Reset"}
          onClick={handleReset}
        />
      </div>
    </div>
  );
}
