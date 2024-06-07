import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import Home				from '@/pages/Home.vue'
import Settings			from '@/pages/Settings/Settings.vue'
import Profile			from '@/pages/Settings/Profile.vue'
import PageTeam			from '@/pages/Settings/Team.vue'
import Calendar			from '@/pages/Settings/Calendar.vue'
import Medias			from '@/pages/Settings/Medias.vue'
import ActivityLog		from '@/pages/Settings/ActivityLog.vue'

import Login 			from '@/pages/Logs/Login.vue'
import Register 		from '@/pages/Logs/Register.vue'
import ForgotPass 		from '@/pages/Logs/forgot-pass.vue'

import Page				from '@/pages/Projects/index.vue'
import WorkPage			from '@/pages/Projects/WorkPage.vue'
import setPage			from '@/pages/Projects/SettingsSpace.vue'

import CreateProject	from '@/pages/Projects/Create.vue'
import editProject		from '@/pages/Projects/Edited.vue'
import Projects			from '@/pages/Projects/index.vue'

// Routes
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: { requiresAuth: true }
		}, {
			path: '/settings/',
			name: 'settings',
			component: Settings,
			meta: { requiresAuth: true }
		}, {
			path: '/team/',
			name: 'team',
			component: PageTeam,
			meta: { requiresAuth: true }
		}, {
			path: '/profile/',
			name: 'profile',
			component: Profile,
			meta: { requiresAuth: true }
		}, {
			path: '/calendar/',
			name: 'calendar',
			component: Calendar,
			meta: { requiresAuth: true }
		}, {
			path: '/medias/',
			name: 'medias',
			component: Medias,
			meta: { requiresAuth: true}
		}, {
			path: '/activity-log/',
			name: 'activityLog',
			component: ActivityLog,
			meta: { requiresAuth: true }
		},
		// Register
		{
			path: '/register/',
			name: 'register',
			component: Register,
			meta: { requiresGuest: true }
		}, {
			path: '/login/',
			name: 'login',
			component: Login,
			meta: { requiresGuest: true }
		}, {
			path: '/forgot/',
			name: 'forgot_pass',
			component: ForgotPass,
			meta: { requiresGuest: true }
		},
		// Page
		{
			path: "/page/",
			name: 'page',
			component: Page,
			meta: { requiresAuth: true }
		}, {
			path: "/page/:id",
			name: 'workPage',
			component: WorkPage,
			meta: { requiresAuth: true }
		}, {
			path: "/settings/:id",
			name:  'settingsPage',
			component: setPage,
			meta: { requiresAuth: true }
		}, 
		// Projects
		{
			path: "/project/create",
			name: "createProject",
			component: CreateProject,
			meta: { requiresAuth: true }
		}, {
			path: "/project/edit/:id",
			name: "editProject",
			component: editProject,
			meta: { requiresAuth: true }
		}, {
			path: "/projects/",
			name: "projects",
			component: Projects,
			meta: { requiresAuth: true }
		}
	]
})

router.beforeResolve(async (to, from, next)=> {
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