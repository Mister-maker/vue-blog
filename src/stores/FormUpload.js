// stores/formStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
        title: '',
        description: '',
        author: {
            name: '',
            designation: '',
        },
        image: null
    },
  }),
  actions: {
    async submitForm() {
      try {
        // Create FormData object
        const formData = new FormData();
        formData.append('title', this.formData.title);
        formData.append('description', this.formData.description);
        
        // Flatten and append nested author object if needed
        formData.append('author[name]', this.formData.author.name);
        formData.append('author[designation]', this.formData.author.designation);
    
        //Append file if you have one (assuming `image` is a URL)
        if (this.formData.image) {
          const response = await fetch(this.formData.image);
          const blob = await response.blob();
          formData.append('image', blob, this.formData.image);
        }
        // Perform Axios request
        const response = await axios.post('http://localhost:8000/blogs/api/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
    
        // Handle successful response
        console.log('Response data:', response.data);
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