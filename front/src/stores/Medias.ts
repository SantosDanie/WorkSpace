// import { defineStore }	from "pinia"
// import { useApi }		from "@/composables/useApi"

// export interface Media{
// 	title: string,
// 	description: string,
// 	userId: string
// }

// export interface State {
// 	media: Media,
// }

// export interface CreateMediaData{
// 	title: string,
// 	description: string,
// 	userId: string,
// 	image: File,
// }

// export interface UpdateMediaData{
// 	title: string,
// 	description: string,
// 	userId: string
// }

// export interface SaveImagePage {
// 	title: string,
// 	image: File,
// 	description: string,
// 	userId: string
// }

// const config 		= { headers: { 'Content-Type': 'multipart/form-data'} };
// const configJson	= { headers: { 'Content-Type': 'application/json'} };

// export const useMediaStore = defineStore('media', {
// 	state: (): State => {
// 		return {
// 			media: {} as Media,
// 		}
// 	},

// 	actions:{
// 		async attempt(){
// 			try {
// 				await this.getMedias()
// 			} catch (error) {
// 				return
// 			}
// 			return
// 		},
	  
// 		async createMedia(payload: CreateMediaData) {
// 			try {
// 				const { data } = await useApi().post(`/api/media`, payload, config);
// 				return data
// 			} catch (error: Error | any) {
// 				console.error(error)
// 				throw error.message
// 			}
// 		},

// 		async getMedias(id: string) {
// 			try {
// 				const {data} = await useApi().get(`/api/media/all/${id}`);
// 				this.media = data
// 				return data
// 			} catch (error: Error | any) {
// 				throw error.message
// 			}
// 		},

// 		async getMedia(id: string) {
// 			try {
// 				const {data} = await useApi().get(`/api/media/edit/${id}`);
// 				this.media = data
// 				return data
// 			} catch (error: Error | any) {
// 				throw error.message
// 			}
// 		},

// 		async updateMedia(id: string, payload: UpdateMediaData) {
// 			try {
// 				const { data } = await useApi().patch(`/api/media/${id}`, payload, config);
// 				return data
// 			} catch (error: Error | any) {
// 				throw error.message
// 			}
// 		},
	  
// 		async deleteMedia(id: string) {
// 			try {
// 				await useApi().delete(`/api/media/${id}`);
// 				return "Media are delete successfully"
// 			} catch(error: Error | any) {
// 				throw error.message
// 			}
// 		}
// 	}
// })