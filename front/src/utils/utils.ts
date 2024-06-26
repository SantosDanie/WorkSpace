import { BlockComponents, availableBlockTypes } from './types'

export function registerBlock(id:string, label:string, component:any, icon:string='bi-text-left', canSplit:boolean=false) {
	(BlockComponents as any)[id] = component
	availableBlockTypes.push({type: 'Turn into', icon, label, blockType: id, canSplit})
}

export function markdownToHtml (mdString:string) {
	return mdString
		.replace(/\\\*/g, '\\*\\*')
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/g, '<em>$1</em>')
		.replaceAll('\\<em>\\</em>', '*')
		.trim()
}

export function htmlToMarkdown (htmlString:string) {
	return htmlString
		.replaceAll('<p>', '')
		.replaceAll('</p>', '')
		.replaceAll('<strong>', '**')
		.replaceAll('</strong>', '**')
		.replaceAll('<em>', '*')
		.replaceAll('</em>', '*')
		.replaceAll(/\<br.*?\>/g, '')
}

export function cleanString(htmlString:string) {
	return htmlString
		.replaceAll('<p>', '')
		.replaceAll('</p>', '')
		.replaceAll('<strong>', '')
		.replaceAll('</strong>', '')
		.replaceAll('<b>', '')
		.replaceAll('</b>', '')
		.replaceAll('<em>', '')
		.replaceAll('</em>', '')
		.replaceAll('<i>', '')
		.replaceAll('</i>', '')
		.replaceAll('<strike>', '')
		.replaceAll('</strike>', '')
		.replaceAll('<u>', '')
		.replaceAll('</u>', '')
		.replaceAll(/\<br.*?\>/g, '')
}

export function removeParagraph(htmlString:string) {
	return htmlString
		.replaceAll('<p>', '')
		.replaceAll('</p>', '')
		.replaceAll(/\<br.*?\>/g, '')
}