import { defineStore }			from "pinia"
import {useApi, useApiPrivate}	from "@/composables/useApi"

export interface Project {
	id: number,
	title: string,
	description: string,
	image: string
}

export interface State {
	project: Project,
}

export interface CreateProjectData {
	title: string,
	description: string,
	image: File
}

export interface UpdateProjectData {
	title: string,
	description: string,
	image: File
	old_image: string,
}

const config = {
	headers: {
	  'Content-Type': 'multipart/form-data',
	},
};

export const usePostStore = defineStore('post', {
	state: (): State => {
		return {
			project: {} as Project,
		}
	},

	actions:{
		async attempt(){
			try {
				await this.getProject()
			} catch (error) {
				return
			}
			return
		},
	  
		async createProject(payload: CreateProjectData){
			try {
				const { data } = await useApi().post(`/api/project`, payload, config);
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async getProjects(){
			try {
				const {data} = await useApi().get(`/api/project`);
				this.project = data
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async getProject(id: string){
			try {
				const {data} = await useApi().get(`/api/project/${id}`);
				this.project = data
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async updateProject(id: string, payload: UpdateProjectData) {
			try {
				const { data } = await useApi().patch(`/api/project/${id}`, payload, config);
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},
	  
		async deleteProject(id: string) {
			try {
				await useApi().delete(`/api/project/${id}`);
				return "Post are delete successfully"
			} catch(error: Error | any) {
				throw error.message
			}
		}
	}
})