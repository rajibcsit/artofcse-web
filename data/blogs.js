import api from "./api/api";

const BlogAPI = {
  AllBlogs: async () => {
    try {
      const response = await api.get("/blog/posts");
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },

  SingleBlog: async (slug) => {
    try {
      const response = await api.get(`/blog/posts/${slug}`);
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },

  blogCategory: async (slug) => {
    try {
      const response = await api.get("/blog/categories");
      return response.data;
    } catch (error) {
      console.log("An error occurred:", error);
      return [];
    }
  },
};

export default BlogAPI;
