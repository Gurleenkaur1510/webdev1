export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>New Generation High School</h1>
      <p style={styles.subtitle}>Student Portal</p>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#1e3a8a",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "28px",
  },
  subtitle: {
    margin: 0,
    fontSize: "16px",
    opacity: 0.8,
  },
};
