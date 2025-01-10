export const checkAuthToken = () => {
    const token = localStorage.getItem("authToken");
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    const uuid = localStorage.getItem("uuid")
    if (!token || !tokenExpiry) {
      return false;
    }
    if (new Date().getTime() > tokenExpiry) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("uuid");
      return false;
    }
  
    return true;
  };
  