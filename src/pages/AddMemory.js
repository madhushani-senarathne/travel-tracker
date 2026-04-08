import { useState } from "react";

export default function AddMemory() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const memory = {
      place,
      date,
      note,
      photo,
    };

    console.log("Memory Saved:", memory);
    alert("Memory Added Successfully! (Temporary - Not saved in database yet)");

    setPlace("");
    setDate("");
    setNote("");
    setPhoto(null);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Travel Memory 📸</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          placeholder="Place Name"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          style={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <input
          style={styles.input}
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <button style={styles.button}>Save Memory</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  },
  title: {
    color: "#fff",
    fontSize: "35px",
    marginBottom: "20px",
  },
  form: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    height: "100px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#673ab7",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};