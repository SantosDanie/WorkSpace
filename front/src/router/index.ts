import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import Home				from '@/pages/Home.vue'
import Settings			from '@/pages/Settings/Settings.vue'
import Profile			from '@/pages/Settings/Profile.vue'
import App				from '@/pages/WorkSpace/Index.vue'
import Create			from '@/pages/WorkSpace/Create.vue'
import Login 			from '@/pages/Logs/Login.vue'
import Register 		from '@/pages/Logs/Register.vue'
import ForgotPass 		from '@/pages/Logs/forgot-pass.vue'
import Page				from '@/pages/Page.vue'

// Routes
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requiresAuth: true }
		},
		{
			path: '/page/',
			name: 'page',
			component: Page,
			// meta: { requiresAuth: true }
		},
		{
			path: '/settings/',
			name: 'settings',
			component: Settings,
			meta: { requiresAuth: true }
		},
		{
			path: '/profile/',
			name: 'profile',
			component: Profile,
			meta: { requiresAuth: true }
		},
		// Register
		{
			path: '/register/',
			name: 'register',
			component: Register,
			meta: { requiresGuest: true }
		},
		{
			path: '/login/',
			name: 'login',
			component: Login,
			meta: { requiresGuest: true }
		},
		{
			path: '/forgot/',
			name: 'forgot_pass',
			component: ForgotPass,
			meta: { requiresGuest: true }
		},
		// project
		{
			path: '/app/',
			name: 'app',
			component: App,
			meta: { requiresAuth: true }
		},
		{
			path: '/app/create/',
			name: 'create',
			component: Create,
			meta: { requiresAuth: true }
		}
	]
})

router.beforeResolve(async (to, from, next)=>{
	// const authStore = useAuthStore()

	// if (to.meta.requiresAuth && !authStore.isAuthenticated) {   
	// 	return next({name: 'login', query: {redirect: to.fullPath}})
	// } else if(to.meta.requiresGuest && authStore.isAuthenticated) {
	// 	return next({name: 'home'})
	// } else{
		return next()
	// }
})

export default router