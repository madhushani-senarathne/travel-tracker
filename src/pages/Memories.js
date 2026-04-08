export default function Memories() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Travel Memories 📍</h1>

      <div style={styles.box}>
        <p>⚠️ This page will show saved memories later using Firebase Database.</p>
        <p>We will connect it soon.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #89f7fe, #66a6ff)",
    padding: "40px",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    color: "white",
  },
  box: {
    background: "white",
    marginTop: "30px",
    padding: "20px",
    borderRadius: "15px",
    display: "inline-block",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
};