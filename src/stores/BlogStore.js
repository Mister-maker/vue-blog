// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [],
    isLoading: true,
    blogDetails: {}
  }),
  actions: {
    async getBlogs() {
      try {
        const response = await axios.get('http://localhost:8000/api/');
        this.blogs = response.data;
      } catch (error) {
        console.error('Error fetching jobs', error);
      } finally {
        this.isLoading = false;
      }
    },

    async getBlogDetails(id) {
      try {
        const response = await axios.get(`http://localhost:8000/api/${id}`);
        this.blogDetails = response.data;
      } catch (error) {
        console.error('Error fetching jobs', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
})