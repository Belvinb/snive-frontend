const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

  
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      throw new Error("Access token not available");
    }
  };

  export default getAuthHeaders