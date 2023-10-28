/* eslint-disable react-hooks/exhaustive-deps */
import  { useState } from "react";
import "./form.css";
import { TfiEmail } from "react-icons/tfi";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface userCredentialProps {
  username: string;
  password: string;
}

async function loginUser({ username, password }: userCredentialProps) {
  if (username === "Testuser" && password === "Testpass") {
    return "pass123";
  } else {
    return "wrong credentials";
  }
}

interface formProps {
  setToken: Function;
}

export default function Form({ setToken }: formProps) {
  // navigate
  const navigate = useNavigate();

  // states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  // function to handle form submit
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    setResponse(token);
    setToken(token);
    if (token === "pass123") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="form_container">
      <div>
        <h1>Welcome Back</h1>
        <p>Sign in to continue to Aiworksquad.</p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="form">
          {/* email */}
          <div className="text_box">
            <TfiEmail className="input_icon" />
            <input
              className="form_input"
              type="text"
              id="email"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* password */}
          <div className="text_box">
            <FiLock className="input_icon" />
            <input
              className="form_input"
              type="text"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember_me_row">
            {/* remember me */}
            <div className="remember_me">
              <input type="checkbox" className="checkbox" />
              <p>Remember me</p>
            </div>
            {/* forgot password */}
            <a href="/" className="forgot_password">
              Forgot password?
            </a>
          </div>
        </div>

        {/* login button */}
        <button className="login_button" type="submit">
          Login
        </button>
        {response !== "pass123" && <p>{response}</p>}
      </form>
    </div>
  );
}
