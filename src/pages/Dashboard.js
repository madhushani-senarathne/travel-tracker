import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Dashboard(){
  const navigate = useNavigate();

  const handleLogout = async()=>{
    await signOut(auth);
    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Link to="/map">Mark Visited Places</Link>
        <Link to="/add-memory">Add Memory</Link>
        <Link to="/memories">View Memories</Link>
      </div>
    </div>
  )
}