export default function StudentList({ students }) {
  return (
    <div>
      <h2 style={styles.title}>Student List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Date of Birth</th>
            <th style={styles.th}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td style={styles.td}>{s.firstName} {s.lastName}</td>
              <td style={styles.td}>{s.dob}</td>
              <td style={styles.td}>{s.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  title: {
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    backgroundColor: "#f3f4f6",
    padding: "12px",
    fontWeight: "600",
    borderBottom: "2px solid #e5e7eb",
  },
  td: {
    padding: "10px 12px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "15px",
  },
};
