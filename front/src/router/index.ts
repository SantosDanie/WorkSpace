import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import Home				from '@/pages/Home.vue'
import Settings			from '@/pages/Settings/Settings.vue'
import Profile			from '@/pages/Settings/Profile.vue'
import PageTeam			from '@/pages/Settings/Team.vue'
import Calendar			from '@/pages/Settings/Calendar.vue'

import App				from '@/pages/WorkSpace/Index.vue'
import Create			from '@/pages/WorkSpace/Create.vue'

import Login 			from '@/pages/Logs/Login.vue'
import Register 		from '@/pages/Logs/Register.vue'
import ForgotPass 		from '@/pages/Logs/forgot-pass.vue'

import Page				from '@/pages/Projects/index.vue'
import PageCreate		from '@/pages/Worksheet/Create.vue'
import PageEdit			from '@/pages/Projects/Edit.vue'

import WorkList			from '@/pages/WorkList/index.vue'
import WorkListCreate	from '@/pages/WorkList/Create.vue'

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
			path: '/settings/',
			name: 'settings',
			component: Settings,
			meta: { requiresAuth: true }
		},
		{
			path: '/team/',
			name: 'team',
			component: PageTeam,
			meta: { requiresAuth: true }
		},
		{
			path: '/profile/',
			name: 'profile',
			component: Profile,
			meta: { requiresAuth: true }
		},
		{
			path: '/calendar/',
			name: 'calendar',
			component: Calendar,
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
		},
		// Page
		{
			path: "/page/",
			name: 'page',
			component: Page,
			meta: { requiresAuth: true }
		},
		{
			path: "/page/create",
			name: 'PageCreate',
			component: PageCreate,
			meta: { requiresAuth: true }
		},
		{
			path: "/page/:id",
			name: 'PageEdit',
			component: PageEdit,
			meta: { requiresAuth: true }
		},
		// WorkList
		{
			path: '/worklist/',
			name: 'WorkList',
			component: WorkList,
			meta: { requiresAuth: true }
		},
		{
			path: '/worklist/create',
			name: 'WorkListCreate',
			component: WorkListCreate,
			meta: { requiresAuth: true }
		}
	]
})

router.beforeResolve(async (to, from, next)=>{
	const authStore = useAuthStore()

	if (to.meta.requiresAuth && !authStore.isAuthenticated) {   
		return next({name: 'login', query: {redirect: to.fullPath}})
	} else if(to.meta.requiresGuest && authStore.isAuthenticated) {
		return next({name: 'home'})
	} else{
		return next()
	}
})

export default router