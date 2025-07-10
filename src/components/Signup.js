import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" ref={emailRef} placeholder="Email" className="border p-2 w-full"/>
        <input type="password" ref={passwordRef} placeholder="Password" className="border p-2 w-full"/>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
