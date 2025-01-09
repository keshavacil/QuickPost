export const signupUser = async (email, password) => {
  try {
    const response = await fetch("https://thundering-adara-mramitdas-10783ebf.koyeb.app/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.status === 200) {
      return { success: true, message: data.message || "Signup successful!" };
    } else {
      return { success: false, message: data.message || "Something went wrong." };
    }
  } catch (error) {
    return { success: false, message: "Something went wrong, please try again." };
  }
};
