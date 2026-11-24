import { useState } from "react";
import { register, login } from "../../services/auth.service.js";
import UserContext from "../../Context/UserContext/UserContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./AuthPage.css"
import image from "../../assets/images.jpg"

function AuthPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error,setError] = useState("");
  const { token, setToken } = useContext(UserContext);

  if (token) {
    return <Navigate to={"/"} replace />;
  }

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    const result = await register(data);
    alert(result.message);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const result = await login(data);
    if (!result?.data?.token) {
      alert(result?.message || "Login failed");
      return;
    }

    localStorage.setItem("token", result.data.token);
    setToken(result.data.token);
    alert(result.message);
  }

  return (
    <>
      <div className="loginpage">
        <div className="login-section">
          <h1 className="login-heading">{isLogin ? "Login" : "Register"}</h1>
          {!isLogin && (
            <input
            className="login-input"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
          className="login-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
          className="login-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        
        <div className="login-toggle">
          <p>{isLogin ? "Dont have a account ," : "Already have a account ,"}</p>
          <div>
            <button className="login-toggle-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "register" : "login"}
          </button>
          </div>
        </div>
        <button className="login-button" onClick={isLogin ? handleLogin : handleRegister}>submit</button>
        <p className="error-message">{error}</p>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
