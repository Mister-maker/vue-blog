<script setup>
  import { useBlogStore } from '@/stores/BlogStore';
  import { RouterLink } from 'vue-router';

  import BlogList from './BlogList.vue';
  import { defineProps } from 'vue';

  // Accessing the store
  const blogStore = useBlogStore();

  // Get all the blogs
  blogStore.getBlogs();

  defineProps({
    limit: Number,
    title: String,
    showButton: {
      type: Boolean,
      default: false,
    },
    showTitle: {
      type: Boolean,
      default: true,
    }
  });

</script>

<template>
  <!-- blogs list section -->
  <section id="blogs-section" class="mt-16">
      <div class="bg-white py-24 sm:py-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto lg:mx-0 text-center">
              <h2 class="text-3xl font-bold tracking-tight text-purple-600 sm:text-4xl">Featured Posts</h2>
              <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <!-- Show loading spinner while loading is true -->
            <div v-if="blogStore.isLoading" class="text-center text-gray-500 py-6">
                <SyncLoader />
            </div>

            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-b border-gray-200 py-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <BlogList v-for="blog in blogStore.blogs.slice(0, limit || blogStore.blogs.length)" :key="blog.id" :blog="blog" />
              <!-- More posts... -->
            </div>
          </div>
      </div>
  </section>

  <!-- More post CTA -->
  <section class="more-post mb-32" v-if="showButton">
      <div class="container text-center mx-auto">
          <RouterLink to="/blogs" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View All Blogs</RouterLink>
      </div>
  </section>
</template>