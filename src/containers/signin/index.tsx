import React from "react";
import "./styles.css";
import Form from "./form";

interface signInProps{
  setToken:Function
}

export default function Signin({setToken}:signInProps) {
  return (
    <div className="container">
      <img src="/logo1.png" alt="logo" />
      <Form setToken={setToken}/>
      <p className="footer">2023 AiworkSquad.</p>
    </div>
  );
}
