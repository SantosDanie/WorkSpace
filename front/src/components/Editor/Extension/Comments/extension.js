import { Mark, mergeAttributes } from '@tiptap/core';
import { v4 as uuidv4 }	from 'uuid'

const Comment = Mark.create({
	name: 'comment',
	addOptions() { return { HTMLAttributes: {} }; },
	addAttributes() {
		return {
			attrs: {
				default: { id: uuidv4() },
				parseHTML: (element) =>	element.getAttribute('data-comment-id'),
				renderHTML: ({attrs}) =>	{
					let dataID = attrs != '' ? attrs : uuidv4();
					return {'data-comment-id': dataID};
				},
			},
		};
	},
	parseHTML()	{ return [{ tag: 'span' }] },
	renderHTML({ HTMLAttributes }) { return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0] },
});

export default Comment;