import api from "./api/api";

const CourseAPI = {
  getCourses: async (type) => {
    try {
      const response = await api.get(`/learning/${type}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },

  getCourseDetails: async (type, slug) => {
    try {
      const response = await api.get(`/learning/${type}/${slug}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
  TopCourses: async (type) => {
    try {
      const response = await api.get(`/learning/${type}/top_courses`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
};

export default CourseAPI;
