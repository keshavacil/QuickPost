export const updateUserData = async (data) => {
 
  const authToken = localStorage.getItem("authToken");
 

  if (!authToken) {
    return { success: false, message: "User is not logged in." };
  }

  const updatedData = Object.keys(data).reduce((acc, key) => {
    if (data[key] !== null && data[key] !== undefined) {
      acc[key] = data[key];
    }
    return acc;
  }, {});


  if (Object.keys(updatedData).length === 0) {
    return { success: false, message: "No data to update." };
  }

  try {
    const response = await fetch(
      `https://thundering-adara-mramitdas-10783ebf.koyeb.app/api/v1/user/update`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    // console.log("body data", JSON.stringify(updatedData));

    const responseText = await response.text();
    // console.log("Raw Response Text:", responseText);

    const result = JSON.parse(responseText);
    // console.log("Updated User Data:", result);

    if (response.ok) {
      if (result && result.user) {
        return { success: true, user: result.user };
      } else {
        // console.error("Missing user data in response:", result);
        return { success: false, message: "Failed to update user data." };
      }
    } else {
      console.error("Error response:", result);
      return {
        success: false,
        message: result.message || "Failed to update user data.",
      };
    }
  } catch (error) {
    console.error("Error updating user data:", error);
    return {
      success: false,
      message: "An error occurred while updating user data.",
    };
  }
};
