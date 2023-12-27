import { useState } from "react";
import axios from "axios";
import Particle from "./components/Particle";
import BackgroundVideo from "./components/BackgroundVideo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthPage = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSignup = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      console.log("Invalid email address");
      return;
    }
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };


  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };




  return (
    <>
    <BackgroundVideo />
    <Particle />
    <div className="login-page">
        <div className="card">
          {isLogin ? (
            // Login Form
            <form onSubmit={onLogin}>
              <div className="title">Login</div>
              <div class="social-icons">
                <a href="#" className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
                <a href="#" className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                </a>
              </div>
              <p>Or use user name and password</p>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="secret"
                placeholder="Password"
                onChange={(e) => setSecret(e.target.value)}
              />
              <button type="submit">LOG IN</button>
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={toggleMode}>
                  Register
                </button>
              </p>
            </form>
          ) : (
            // Sign Up Form
            <form onSubmit={onSignup}>
              <div className="title">Sign Up</div>
              <div class="social-icons">
                <a href="#" className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
                <a href="#" className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                </a>
              </div>
              <p>Or manual sign up</p>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="secret"
                placeholder="Password"
                onChange={(e) => setSecret(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <button type="submit">SIGN UP</button>
              <p>
                Already have an account?{' '}
                <button type="button" onClick={toggleMode}>
                  Login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;