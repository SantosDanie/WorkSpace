import { defineStore } from "pinia"
import { useApi } from "@/composables/useApi"

export interface Page{
	title: string,
	type: string,
	image: string
}

export interface State{
	page: Page,
}

export interface CreatePageData{
	title: String,
	blocks: Object,
	settings: any,
	userId: String
}

export interface UpdatePageData{
	title: String,
	blocks: Object,
	settings: any,
}

export interface SaveImagePage {
	page: string,
	image: File,
	style: [{
		width: number,
		height: number
	}]
	old_image: string
}

const config		= { headers: { 'Content-Type': 'application/json'} };
const configImage	= { headers: { 'Content-Type': 'multipart/form-data'} };

export const usePageStore = defineStore('page', {
	state: (): State => {
		return { page: {} as Page }
	},

	actions:{
		async createPage(payload: CreatePageData) {
			try {
				const { data } = await useApi().post(`/api/page`, payload, config);
				return data
			} catch (error: Error | any) {
				console.error(error)
				throw error.message
			}
		},

		async getPages(id: string){
			try {
				const {data} = await useApi().get(`/api/page/${id}`);
				this.page = data
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async getPage(id: string){
			try {
				const {data} = await useApi().get(`/api/page/edit/${id}`);
				this.page = data
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async updatePage(id: string, payload: UpdatePageData) {
			try {
				const { data } = await useApi().patch(`/api/page/${id}`, payload, config);
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},
	  
		async deletePage(id: string) {
			try {
				await useApi().delete(`/api/page/${id}`);
				return "Post are delete successfully"
			} catch(error: Error | any) {
				throw error.message
			}
		},

		async saveImage(payload: UpdatePageData) {
			try {
				const { data } = await useApi().post(`/api/page/images`, payload, configImage);
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		}
	}
})