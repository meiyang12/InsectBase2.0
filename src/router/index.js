import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/Organism',
    name: 'Organism',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Organism.vue')
  },
  {
    path: '/Classify',
    name: 'Classify',
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/Organism/:id',
    name: 'OrganismDetail',
    component: () => import('../views/OrganismDetail.vue')
  },
  {
    path: '/Pcg',
    name: 'Pcg',
    component: () => import('../views/Pcg.vue')
  },
  {
    path: '/Transcriptome',
    name: 'Transcriptome',
    component: () => import('../views/Transcriptome.vue')
  },
  {
    path: '/geneFamily',
    name: 'geneFamily',
    component: () => import('../views/geneFamily.vue')
  },
  {
    path: '/3DGBrowser',
    name: '3DGBrowser',
    component: () => import('../views/3DGBrowser.vue')
  },
  {
    path: '/JBrowse',
    name: 'JBrowse',
    component: () => import('../views/JBrowse.vue')
  },
  {
    path: '/Blast',
    name: 'Blast',
    component: () => import('../views/BLAST.vue')
  },
  {
    path: '/Synteny',
    name: 'Synteny',
    component: () => import('../views/Synteny.vue')
  },
  {
    path: '/GeneAnno',
    name: 'GeneAnno',
    component: () => import('../views/GeneAnno.vue')
  },
  {
    path: '/Links',
    name: 'Links',
    component: () => import('../views/Links.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router