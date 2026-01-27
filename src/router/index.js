import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LightComicsView from '../views/LightComicsView.vue'
import LophorinaView from '../views/LophorinaView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsConditionsView from '../views/TermsConditionsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/lightcomics', name: 'lightcomics', component: LightComicsView },
    { path: '/lophorina', name: 'lophorina', component: LophorinaView },
    { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicyView },
    { path: '/terms-conditions', name: 'terms', component: TermsConditionsView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
})

export default router
