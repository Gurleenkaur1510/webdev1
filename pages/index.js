/**
 * Author: Gurleen Kaur
 * Date: June 17, 2025
 * Description: Student portal for New Generation High School to view and add students.
 * This app displays a navbar, list of students, form to add a student with validation,
 * and a footer with school details. Uses custom components and React hooks.
 */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

const initialStudents = [
  { id: 1, firstName: "Ava", lastName: "Smith", dob: "2006-04-10", grade: "10" },
  { id: 2, firstName: "Liam", lastName: "Johnson", dob: "2005-06-21", grade: "11" },
  { id: 3, firstName: "Noah", lastName: "Williams", dob: "2007-01-17", grade: "9" },
  { id: 4, firstName: "Emma", lastName: "Brown", dob: "2004-12-04", grade: "12" },
  { id: 5, firstName: "Sophia", lastName: "Jones", dob: "2005-09-09", grade: "11" }
];

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };

  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <section style={styles.card}>
          <StudentForm onAddStudent={addStudent} />
        </section>
        <section style={styles.card}>
          <StudentList students={students} />
        </section>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    padding: "20px",
    background: "#f9fafb",
    minHeight: "calc(100vh - 140px)",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
};
