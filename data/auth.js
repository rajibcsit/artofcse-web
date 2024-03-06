import api from "./api/authAPI";

const AuthAPI = {
  UserLogin: async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
  UserRegistration: async (name, email, password,password_confirmation) => {
    try {
      const response = await api.post("/auth/register", { name, email, password ,password_confirmation});
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
};

export default AuthAPI;
