import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", dob: "", grade: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, dob, grade } = formData;
    if (!firstName || !lastName || !dob || !grade) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    onAddStudent(formData);
    setFormData({ firstName: "", lastName: "", dob: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={styles.grid}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Add Student</button>
    </form>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
  },
  button: {
    background: "#1e3a8a",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "6px",
  },
};
