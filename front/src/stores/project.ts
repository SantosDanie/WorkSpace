import { defineStore }			from "pinia"
import {useApi, useApiPrivate}	from "@/composables/useApi"

export interface Project {
	title:		string,
	progress:	Number,
	deadline:	String,
	user:		String,
	details:	Object,
	members:	Object,
	files:		Object,
	settings:	Object
}

export interface State {
	project: Project,
}

export interface CreateProjectData {
	title:		string,
	progress:	Number,
	deadline:	String,
	user:		String,
	details:	Object,
	members:	Object,
	files:		Object,
	settings:	Object
}

export interface UpdateProjectData {
	title:		string,
	progress:	Number,
	deadline:	String,
	user:		String,
	details:	Object,
	members:	Object,
	files:		Object,
	settings:	Object
}

const config		= { headers: { 'Content-Type': 'multipart/form-data' }};
const configJson	= { headers: { 'Content-Type': 'application/json' }};

export const useProjectStore = defineStore('project', {
	state: (): State => {
		return {
			project: {} as Project,
		}
	},

	actions:{
		async attempt() {
			try {
				await this.getProjects()
			} catch (error) {
				return
			}
			return
		},
	  
		async createProject(payload: CreateProjectData) {
			try {
				const { data } = await useApi().post(`/api/project`, payload, configJson);
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async getProjects() {
			try {
				const {data} = await useApi().get(`/api/project`);
				this.project = data
				return data
			} catch (error: Error | any) {
				throw error.message
			}
		},

		async getProject(id: string) {
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
				const { data } = await useApi().patch(`/api/project/${id}`, payload, configJson);
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