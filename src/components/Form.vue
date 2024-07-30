<script setup>
    import { reactive } from 'vue';
    import { useBlogStore } from '@/stores/BlogStore';

    const blogStore = useBlogStore();

    const form = reactive({
        title: '',
        description: '',
        author: '',
    });

    const handleSubmit = () => {
        blogStore.addBlog(form);
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
                    <input type="text" v-model="form.author" name="author" id="author" placeholder="Enter author name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div class="mb-5">
                    <label for="description"  class="mb-3 block text-base font-medium text-[#07074D]">
                        Description
                    </label>
                    <textarea rows="4" v-model="form.description" name="description" id="description" placeholder="Type your description"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
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