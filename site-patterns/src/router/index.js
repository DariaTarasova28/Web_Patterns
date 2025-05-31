import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'
import HomePage from '@/pages/HomePage.vue'
import TheoryPage from '@/pages/TheoryPage.vue'
import TestsPage from '@/pages/TestsPage.vue'
import PatternView from '@/views/PatternView.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: HomePage
      },
       {
         path: '/pattern/:name',
         name: 'Pattern',
         component: PatternView
  },
      {
        path: 'theory',
        component: TheoryPage
      },
      {
        path: 'tests',
        component: TestsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router




