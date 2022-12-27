import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import spread from '../components/spread.vue'
import symptoms from '../components/symptoms.vue'
import prevention from '../components/prevention.vue'
import protect from '../components/protect.vue'
import hands from '../components/hands.vue'
import treatment from '../components/treatment.vue'
import news from '../components/news.vue'
import faq from '../components/faq.vue'
import doo from '../components/do.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/spread',
      name: 'spread',
      component: spread
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: symptoms
    },
    {
      path: '/prevention',
      name: 'prevention',
      component: prevention
    },
    {
      path: '/protect',
      name: 'protect',
      component: protect
    },
    {
      path: '/hands',
      name: 'hands',
      component: hands
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: treatment
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/do',
      name: 'do',
      component: doo
    },
   
  ]
})

export default router
