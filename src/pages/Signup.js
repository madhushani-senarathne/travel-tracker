import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleSignup=async(e)=>{
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      navigate("/dashboard");
    }catch(err){ alert(err.message) }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      <p>Already have account? <Link to="/">Login</Link></p>
    </div>
  );
}