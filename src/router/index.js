import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ResumeView from "../views/ResumeView.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectView
    },
    {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
    },
    {
        path : '/:catchAll(.*)',
        redirect : '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router