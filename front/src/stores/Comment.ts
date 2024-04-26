import { defineStore }	from "pinia"
import { useApi }		from "@/composables/useApi"

export interface Comments {
	pageId:	String,
	commentId: String,
	comment: {
		value: 'First comment',
		author: '',
	},
	replies: []
}

export interface State {
	comments: Comments,
}

export interface CreateCommentData {
	title: string,
	type: string,
	description: string,
	userID: string
}

const config	= { headers: { 'Content-Type': 'application/json'} };

export const useCommentStore = defineStore('comments', {
	state: (): State => {
		return {
			comments: {} as Comments,
		}
	},

	actions:{
		async createComment(payload: CreateCommentData) {
			console.log(payload);
			// try {
			// 	const { data } = await useApi().post(`/api/media`, payload, config);
			// 	return data
			// } catch (error: Error | any) {
			// 	console.error(error)
			// 	throw error.message
			// }
		},

		async updateComment(payload: CreateCommentData) {
			console.log(payload);
			// try {
			// 	const { data } = await useApi().post(`/api/media`, payload, config);
			// 	return data
			// } catch (error: Error | any) {
			// 	console.error(error)
			// 	throw error.message
			// }
		},
	}
})