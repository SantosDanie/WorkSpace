import { createApp }			from 'vue'
import { createPinia }			from 'pinia'
import { OhVueIcon, addIcons }	from "oh-vue-icons"
import { authentication }		from '@/plugins/authentication'
import App						from './App.vue'
import router					from './router'
import {
	MdDragindicator,
	HiTrash,
	HiPlus,
	HiSolidSearch,
	BiTextLeft,
	BiTypeH1,
	BiTypeH2,
	BiTypeH3,
	BiCardHeading,
	FaHeading,
	OiHeading,
	BiLayoutThreeColumns,
	BiHr,
	BiQuote,
	MdImageOutlined,
	CoShortText,
	IoCheckboxOutline,
	CoListNumbered,
	ViFileTypeTextile,
	CoViewColumn,
	IoImageOutline,
	PxCardText,
}								from "oh-vue-icons/icons"

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/styles.scss';

addIcons(
	MdDragindicator,
	HiTrash,
	HiPlus,
	HiSolidSearch,
	BiTextLeft,
	BiTypeH1,
	BiTypeH2,
	BiTypeH3,
	BiCardHeading,
	FaHeading,
	OiHeading,
	BiLayoutThreeColumns,
	BiHr,
	BiQuote,
	MdImageOutlined,
	CoShortText,
	IoCheckboxOutline,
	CoListNumbered,
	ViFileTypeTextile,
	CoViewColumn,
	IoImageOutline,
	PxCardText
)

const app = createApp(App)
app.use(createPinia())
authentication.install()
.then(() => {
	app.use(router)
	app.component("v-icon", OhVueIcon)
	app.mount('#app')
})