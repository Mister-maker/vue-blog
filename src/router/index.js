import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'
import BlogView from '@/views/BlogView.vue'
import AddBlog from '@/views/AddBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogView
    },
    {
      path: '/blogs/:id',
      name: 'blog-detail',
      component: BlogDetailView,
    },
    {
      path: '/add-blog',
      name: 'add-blog',
      component: AddBlog,
    },
  ]
})

export default router
