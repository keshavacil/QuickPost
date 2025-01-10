import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
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
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-20 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {isSignup ? "Sign Up" : "Log In"}
          </h2>
        </div>
        <form
          onSubmit={handleLoginOrSignup}
          className="w-full max-w-md space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`w-full px-4 py-3 border bg-white rounded-lg ${
                emailError
                  ? "border-red-500"
                  : email && !emailError
                  ? "border-blue-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              className={`w-full px-4 py-3 border bg-white rounded-lg ${
                passwordError
                  ? "border-red-500"
                  : password && !passwordError
                  ? "border-blue-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {isLoading
                ? isSignup
                  ? "Signing Up..."
                  : "Logging In..."
                : isSignup
                ? "Sign Up"
                : "Log In"}
            </button>
            <div className="flex justify-between text-sm text-gray-600">
              <p
                className="cursor-pointer hover:text-blue-500"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup
                  ? "Already have an account? Log In"
                  : "Create an Account"}
              </p>
              <p className="cursor-pointer hover:text-blue-500">
                Forgot your Password?
              </p>
            </div>
          </div>
        </form>
      </div>
      <div
        className="hidden md:block flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("Images/LoginBanner/yLxJlkkUSLu7GjZHiPfu7w.webp")',
        }}
      ></div>
    </div>
  );
};

export default LoginPage;
