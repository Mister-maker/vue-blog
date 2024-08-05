// stores/counter.js
import { defineStore } from 'pinia'
import router from '../router'
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
        const response = await axios.get('http://localhost:8000/blogs/api/');
        console.log(response.data)
        this.blogs = response.data;

      } catch (error) {
        console.error('Error fetching jobs', error);
      } finally {
        this.isLoading = false;
      }
    },

    async getBlogDetails(id) {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/api/${id}`);
        this.blogDetails = response.data;
      } catch (error) {
        console.error('Error fetching jobs', error);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteBlog(id) {
      try {
        await axios.delete(`http://localhost:8000/blogs/api/${id}`);
        router.push('/blogs');
      } catch (error) {
        console.error('Error deleting blog', error);
      }
    },

    dateFormater (date) {
      const newDate = new Date(date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = newDate.toLocaleDateString('en-US', options);
      return formattedDate;
    }
  }
})
