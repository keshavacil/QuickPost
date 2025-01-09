export const loginUser = async (email, password) => {
    try {
      const response = await fetch("https://thundering-adara-mramitdas-10783ebf.koyeb.app/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        const expiryTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem("authToken", data.access_token);
        localStorage.setItem("uuid", data.uuid);
        localStorage.setItem("tokenExpiry", expiryTime);
        return { success: true, message: "Login successful!" };
      } else {
        return { success: false, message: data.message || "Login failed. Please try again." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred. Please try again." };
    }
  };