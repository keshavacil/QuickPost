import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { loginUser } from "../Service/loginservice";
import { checkAuthToken } from "../utils/authUtils";
import { signupUser } from "../Service/signupservice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const navigationTimeoutRef = useRef(null);

  const navigate = (url) => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = setTimeout(() => {
      router.push(url);
    }, 300);
  };

  useEffect(() => {
    if (checkAuthToken()) {
      navigate("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (router.pathname === "/signup") {
      setIsSignup(true);
    } else {
      setIsSignup(false);
    }
  }, [router.pathname]);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const validatePassword = (password) => {
    if (!password || password.length < 6) {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  };

  const handleLoginOrSignup = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      setError("Please fill in the form correctly.");
      return;
    }

    setIsLoading(true);

    let response;

    if (isSignup) {
      response = await signupUser(email, password);
    } else {
      response = await loginUser(email, password);
    }

    setIsLoading(false);

    if (response.success) {
      if (isSignup) {
        setIsSignup(false);
        navigate("/login");
      } else {
        navigate("/dashboard");
      }
    } else {
      setError(response.message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Coveify</h1>
        </div>
        <div className={styles.header}>
          <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
          <form className={styles.form} onSubmit={handleLoginOrSignup}>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={
                  emailError
                    ? styles.error
                    : email && !emailError
                    ? styles.valid
                    : ""
                }
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
                className={
                  passwordError
                    ? styles.error
                    : password && !passwordError
                    ? styles.valid
                    : ""
                }
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.Submitbutton}>
              <button type="submit" disabled={isLoading}>
                {isLoading
                  ? isSignup
                    ? "Signing Up..."
                    : "Logging In..."
                  : isSignup
                  ? "Sign Up"
                  : "Log In"}
              </button>
            </div>
            <div className={styles.Options}>
              <p
                className={styles.forgotPassword}
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup
                  ? "Already have an account? Log In"
                  : "Create an Account"}
              </p>
              <p className={styles.forgotPassword}>Forgot your Password?</p>
            </div>
          </form>
        </div>
        <div className={styles.loginFooter}>
          <div className={styles.loginFooterInner}>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Security</a>
          </div>
        </div>
      </div>
      <div className={styles.rightImage}>
        <img
          src="Images\LoginBanner\yLxJlkkUSLu7GjZHiPfu7w.webp"
          alt="Login Image"
          className={styles.loginImage}
        />
      </div>
    </div>
  );
};

export default LoginPage;
