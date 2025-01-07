import { useRouter } from "next/router";
import styles from "./style.module.css";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add logic for form validation or API calls here
    router.push("/dashboard");
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Quick Post</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.input}>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <div className={styles.forgot}>
              <p className={styles.forgotPassword}>Forgot Password?</p>
            </div>
          </div>
          <div className={styles.Submitbutton}>
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className={styles.SignUpMethods}>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
