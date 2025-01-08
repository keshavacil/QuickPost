import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { loginUser } from "../Service/loginservice";
import { checkAuthToken } from "../utils/authUtils";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (checkAuthToken()) {
      router.push("/dashboard");
    }
  }, [router]);

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and Password are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const { success, message } = await loginUser(email, password);

    setIsLoading(false);

    if (success) {
      router.push("/dashboard");
    } else {
      setError(message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Coveify</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.forgot}>
              <p className={styles.forgotPassword}>Forgot Password?</p>
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.Submitbutton}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>

        {/* <div className={styles.SignUpMethods}>
          <p className={styles.SignUp}>
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/signup")}
              className={styles.createNew}
            >
              Create New
            </span>
          </p>
          <p className={styles.or}>OR</p>
          <button>Sign in with Google</button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
