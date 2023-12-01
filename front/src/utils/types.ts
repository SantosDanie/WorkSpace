import TextBlock		from '@/components/blocks/TextBlock.vue'
import DividerBlock		from '@/components/blocks/DividerBlock.vue'
import HeadingBlock		from '@/components/blocks/HeadingBlock.vue'
import QuoteBlock		from '@/components/blocks/QuoteBlock.vue'
import ImageBlock		from '@/components/blocks/ImageBlock.vue'

export interface Block {
	id: string,
	type: BlockType;
	details: Details;
}

export interface BlockImage {
	id: string,
	type: BlockType;
	details: DetailsImage;
}

export enum BlockType {
	Text	= 'TEXT',
	H1		= 'H1',
	H2		= 'H2',
	H3		= 'H3',
	H4		= 'H4',
	H5		= 'H5',
	H6		= 'H6',
	Divider = 'DIVIDER',
	Quote	= 'QUOTE',
	Image	= 'IMAGE',
}

export interface Details {
	value?: string;
	blockTypes?: BlockType[];
}

export interface DetailsImage {
	value?: string;
	width?: string;
	blockTypes?: BlockType[];
}

export const BlockComponents = {
	[BlockType.Text]:		TextBlock,
	[BlockType.H1]:			HeadingBlock,
	[BlockType.H2]:			HeadingBlock,
	[BlockType.H3]:			HeadingBlock,
	[BlockType.H4]:			HeadingBlock,
	[BlockType.H5]:			HeadingBlock,
	[BlockType.H6]:			HeadingBlock,
	[BlockType.Divider]:	DividerBlock,
	[BlockType.Quote]:		QuoteBlock,
	[BlockType.Image]:		ImageBlock,
}

export const textBlockMap = [
	BlockType.Text,
	BlockType.H1,
	BlockType.H2,
	BlockType.H3,
	BlockType.H4,
	BlockType.H5,
	BlockType.H6,
	BlockType.Text,
	BlockType.Quote,
]

export const isTextBlock = (type: string) => {
	return textBlockMap.some(textBlock => textBlock === type)
}

export const availableBlockTypes = [
	{
		type: 'Turn into',
		icon: 'bi-text-left',
		label: 'Text',
		blockType: BlockType.Text,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 1',
		blockType: BlockType.H1,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 2',
		blockType: BlockType.H2,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 3',
		blockType: BlockType.H3,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 4',
		blockType: BlockType.H4,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 5',
		blockType: BlockType.H5,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'oi-heading',
		label: 'Heading 6',
		blockType: BlockType.H6,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-hr',
		label: 'Divider',
		blockType: BlockType.Divider,
		canSplit: false,
	}, {
		type: 'Turn into',
		icon: 'bi-quote',
		label: 'Quote',
		blockType: BlockType.Quote,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'md-image-outlined',
		label: 'Image',
		blockType: BlockType.Image,
		canSplit: true,
	}
] as {
	type:string,
	icon:string,
	label:string,
	blockType:BlockType|string,
	canSplit:boolean
}[]
