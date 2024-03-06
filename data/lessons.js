import api from "./api/api";

const LessonAPI = {
  AllLessons: async (slug) => {
    try {
      const response = await api.get(`/lesson/${slug}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },

  SingleLesson: async (slug) => {
    try {
      const response = await api.get(`/lesson/${slug}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },

  CourseLessons: async (type,slug) => {
    try {
      const response = await api.get(`/learning/${type}/${slug}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
};

export default LessonAPI;
