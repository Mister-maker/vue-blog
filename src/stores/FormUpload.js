// stores/formStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router'


export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
        title: '',
        description: '',
        author: {
            name: '',
            designation: '',
        },
        blog_image: null
    },
    isLoading : false
  }),
  actions: {
    async submitForm() {
      try {
        // start loading    
        this.isLoading = true;

        // Perform Axios request
        const response = await axios.post('http://localhost:8000/blogs/api/', this.formData, {
          header : {
            'Content-Type' : 'application/json'
          }
        });
        // Handle successful response
        this.isLoading = false;
        router.push(`/blogs/${response.data.id}`);
        return response.data;
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
        throw error;
      }
    },
    setFormData(data) {
      this.formData = data;
    },
  },
});