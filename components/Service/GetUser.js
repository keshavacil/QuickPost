export const getUserData = async () => {
  const uuid = localStorage.getItem("uuid");
  const authToken = localStorage.getItem("authToken");

  if (!uuid || !authToken) {
    return { success: false, message: "User is not logged in." };
  }
  try {
    const response = await fetch(`https://thundering-adara-mramitdas-10783ebf.koyeb.app/api/v1/user/${uuid}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${authToken}`,  
      },
    });

    const data = await response.json();

    if (response.status === 200) {
      const filteredData = {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        dob: data.dob,
        gender: data.gender,
        email: data.email,
        username: data.username,
        phone_no: data.phone_no,
        address: data.address,
        city: data.city,
        state: data.state,
        postal_code: data.postal_code,
        country: data.country,
      };
      return { success: true, user: filteredData  };
    } else {
      return { success: false, message: data.message || "Failed to fetch user data." };
    }
  } catch (error) {
    return { success: false, message: "An error occurred while fetching user data." };
  }
};
