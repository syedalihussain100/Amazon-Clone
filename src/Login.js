import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //  Logged in redirect homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //  create a user login and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://i.pinimg.com/originals/fe/da/d8/fedad83f2215483d6df01669661502f2.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => Setemail(event.target.value)}
            type="text"
            placeholder="Enter Your Email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => Setpassword(event.target.value)}
            type="password"
            placeholder="Enter Your Password"
          />
          <button onClick={login} type="submit" className="loginsign_button">
            Sign In
          </button>
        </form>
        <p>
          Amazon Pay and Login with Amazon provide buyers with a secure,
          trusted, and convenient way to sign in and pay for their purchases on
          your site by using their ...
        </p>
        <button onClick={register} className="loginsign_register">
          Create Your Amazon Account!
        </button>
      </div>
    </div>
  );
}

export default Login;
