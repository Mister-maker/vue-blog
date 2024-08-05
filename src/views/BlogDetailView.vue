<script setup>
    import { useBlogStore } from '@/stores/BlogStore';
    import { useRoute } from 'vue-router';
    import GoBack from '@/components/GoBack.vue';
    import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

    const route = useRoute();
    const blogId = route.params.id;

    const blogStore = useBlogStore();

    blogStore.getBlogDetails(blogId);
</script>
<template>
    <!-- Hero Section -->
    <section id="hero-section">
        <div class="container-fluid font-sans text-center bg-gray-900 py-24">
            <h1 class="text-5xl font-extrabold text-white">Blog <span class="text-purple-600">Details</span></h1>
        </div>
    </section>

    <!-- Blog Details -->

    <section class="text-gray-700 body-font overflow-hidden bg-white">
        
        <div class="container px-5 py-24 mx-auto">
            <GoBack />

            <!-- Show loading spinner while loading is true -->
            <div v-if="blogStore.isLoading" class="text-center text-gray-500 py-6">
                <SyncLoader />
            </div>
            
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" :src="blogStore.blogDetails.blog_image">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    
                    <h2 class="text-sm title-font text-gray-700 tracking-widest">{{ blogStore.dateFormater(blogStore.blogDetails.timestamp) }}</h2>
                    <h1 class="text-gray-900 text-4xl title-font font-bold mb-1">{{ blogStore.blogDetails.title }}</h1>
                    <div class="flex mb-4">
                        <span class="title-font font-medium text-2xl text-gray-900">{{ blogStore.blogDetails.salary }}</span>
                    </div>
                    <p class="leading-relaxed">{{ blogStore.blogDetails.description }}</p>
                    <div class="flex border-t border-gray-300 mt-5 pt-5">
                        <button type="button" class="mr-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white me-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            Update Blog
                        </button>

                        <button @click="blogStore.deleteBlog(blogStore.blogDetails.id)" type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white me-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            Delete Blog
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>