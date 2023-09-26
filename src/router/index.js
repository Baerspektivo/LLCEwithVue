import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../views/Dashboard.vue';
import question from '../views/modeType/question.vue';
import questList from '../views/modeType/questList.vue';
import check from '../views/modeType/check.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      children: [
      {
        path: 'question',
        name: 'question',
        component: question
      },
      {
        path: 'questlist',
        name: 'questlist',
        component: questList
      },
      {
        path: 'check',
        name: 'check',
        component: check
      }
      ]
    },
  ]
})

export default router
