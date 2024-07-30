<script setup>
    import BlogLists from '@/components/BlogLists.vue';
</script>

<template>
    <!-- Hero Section -->
    <section id="hero-section">
        <div class="container-fluid font-sans text-center bg-gray-900 py-24">
            <h1 class="text-5xl font-extrabold text-white">All <span class="text-purple-600">Blogs</span></h1>
            <h4 class="text-xl text-gray-400 max-w-2xl mx-auto mb-5 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim voluptatem aperiam amet animi. Quasi, sequi.</h4>
            <form class="max-w-lg mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
                </div>
            </form>
        </div>
    </section>

    <!-- blogs list section -->
     <BlogLists :showTitle="false" />
</template>

  