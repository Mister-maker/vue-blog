<script setup>
    import { ref } from 'vue';
    import { useFormStore } from '@/stores/FormUpload';

    const form = ref({
        title: '',
        description: '',
        author: {
            name: '',
            designation: ''
        },
        image: null
    });

    const formStore = useFormStore();

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            form.value.image = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }

    async function handleSubmit() {
        try {
            // Update the store with the form data
            formStore.setFormData(form.value);

            // Submit the form using the Pinia store action
            await formStore.submitForm();

            // Optionally reset the form or handle success
            form.value = {
                title: '',
                description: '',
                author: {
                    name: '',
                    designation: ''
                },
                image: null
            };
        } catch (error) {
            // Handle submission error
            console.error('Error submitting form:', error);
        }
    }

</script>

<template>
    <!-- component -->
    <div class="flex items-center justify-center p-12">
        <!-- Author: FormBold Team -->
        <!-- Learn More: https://formbold.com -->
        <div class="mx-auto w-full max-w-[550px]">
            <form @submit.prevent="handleSubmit" method="POST">
                <div class="mb-5">
                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Blog Title
                    </label>
                    <input type="text" v-model="form.title" name="blog-title" id="blog-title" placeholder="Blog Title"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="author"  class="mb-3 block text-base font-medium text-[#07074D]">
                        Author Name
                    </label>
                    <input type="text" v-model="form.author.name" name="author" id="author" placeholder="Enter author name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="author_designation"  class="mb-3 block text-base font-medium text-[#07074D]">
                        Author Designation
                    </label>
                    <input type="text" v-model="form.author.designation" name="author_designation" id="author-designation" placeholder="Enter author designation"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="description"  class="mb-3 block text-base font-medium text-[#07074D]">
                        Description
                    </label>
                    <textarea rows="4" v-model="form.description" name="description" id="description" placeholder="Type your description"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
                </div>
                <div class="mb-5">
                    <input accept="image/*" @change="handleImageUpload" class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file">
                </div>
                <div>
                    <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>