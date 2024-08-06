<script setup>
    import BlogLists from '@/components/BlogLists.vue';
    import Search from '@/components/Search.vue';
</script>

<template>
    <!-- Hero Section -->
    <section id="hero-section">
        <div class="container-fluid font-sans text-center bg-gray-900 py-24">
            <h1 class="text-5xl font-extrabold text-white">All <span class="text-purple-600">Blogs</span></h1>
            <h4 class="text-xl text-gray-400 max-w-2xl mx-auto mb-5 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim voluptatem aperiam amet animi. Quasi, sequi.</h4>
            <Search />
        </div>
    </section>

    <!-- blogs list section -->
     <BlogLists :showTitle="false" />
</template>

  