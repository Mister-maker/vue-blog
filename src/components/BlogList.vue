<script setup>
    import { useBlogStore } from '@/stores/BlogStore';
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    defineProps({
        blog: Object
    });

    // Blogs Store
    const blogStore = useBlogStore();

    const shortDescription = (description) => {
        if (description.length > 100) {
            return description.slice(0, 100) + '...';
        }
        return description;
    };

</script>

<template>
    <article class="flex max-w-xl flex-col items-start justify-between p-4">
        <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">{{ blogStore.dateFormater(blog.timestamp) }}</time>
        </div>
        <div class="group relative">
            <img class="rounded-lg"
                :src="blog.blog_image"
                alt="">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <RouterLink :to="`/blogs/${blog.id}`">
                    <span class="absolute inset-0"></span>
                    {{ blog.title }}
                </RouterLink>
            </h3>
            
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ shortDescription(blog.description) }}</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" class="h-10 w-10 rounded-full bg-gray-50">
            <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        {{ blog.author.name }}
                    </a>
                </p>
                <p class="text-gray-600">{{ blog.author.designation }}</p>
            </div>
        </div>
    </article>
</template>