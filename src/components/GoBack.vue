<script setup>
    import { useRouter, useRoute } from 'vue-router';
    const router = useRouter();

    function goBack () {
        router.go(-1)
    }

</script>

<template>
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <button @click="goBack" class="mb-2 mr-2 px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white me-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Go Back
        </Button>
    </div>
</template>