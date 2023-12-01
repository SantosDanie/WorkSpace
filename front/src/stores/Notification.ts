import { defineStore }	from "pinia"
import { useApi }		from "@/composables/useApi"

export interface Notifications {
	title: string,
	type: string,
	description: string,
	userID: string
}

export interface State {
	notifications: Notifications,
}

export interface CreateNotificationData {
	title: string,
	type: string,
	description: string,
	userID: string
}
const config	= { headers: { 'Content-Type': 'application/json'} };

export const useNotificationStore = defineStore('notification', {
	state: (): State => {
		return {
			notifications: {} as Notifications,
		}
	},

	actions: {
		async getNotifications(userId: string) {
			try {
				const { data } = await useApi().get(`/api/notification/${userId}`, config);
				return data
			} catch (error: Error | any) {
				console.error(error)
				throw error.message
			}
		},
		async createNotification(payload: CreateNotificationData) {
			try {
				const { data } = await useApi().post(`/api/notification`, payload, config);
				return data
			} catch (error: Error | any) {
				console.error(error)
				throw error.message
			}
		} 
	}
})