export const checkAuthToken = () => {
    const token = localStorage.getItem("authToken");
    const tokenExpiry = localStorage.getItem("tokenExpiry");
   
    if (!token || !tokenExpiry) {
      return false;
    }
    if (new Date().getTime() > tokenExpiry) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("tokenExpiry");
      return false;
    }
  
    return true;
  };
  