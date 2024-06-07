import TextBlock    from '@/components/Editor/blocks/TextBlock.vue';
import QuoteBlock   from '@/components/Editor/blocks/QuoteBlock.vue';
import ImageBlock	from '@/components/Editor/Blocks/ImageBlock.vue';
import DividerBlock from '@/components/Editor/blocks/DividerBlock.vue';
import HeadingBlock from '@/components/Editor/blocks/HeadingBlock.vue';

export interface Block {
	id: string,
	type: BlockType;
	details: Details;
}

export interface Details {
	value?: string;
	blockTypes?: BlockType[];
}

export interface BlockImage {
	id: string,
	type: BlockType;
	details: DetailsImage;
}

export interface DetailsImage {
	value?: string;
	width?: string;
	type?: string;
	blockTypes?: BlockType[];
}

export enum BlockType {
	Text    = 'TEXT',
	H1      = 'H1',
	H2      = 'H2',
	H3      = 'H3',
	H4      = 'H4',
	H5      = 'H5',
	H6      = 'H6',
	Divider = 'DIVIDER',
	Quote   = 'QUOTE',
	Image   = 'IMAGE',
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

export const textBlockMap	= [BlockType.Text, BlockType.Quote]
export const isTextBlock	= (type: string) => { return textBlockMap.some(textBlock => textBlock === type) }

export const availableBlockTypes = [
	{
		type: 'Turn into',
		icon: 'bi-text-left',
		label: 'Text',
		blockType: BlockType.Text,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h1',
		label: 'Heading 1',
		blockType: BlockType.H1,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h2',
		label: 'Heading 2',
		blockType: BlockType.H2,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h3',
		label: 'Heading 3',
		blockType: BlockType.H3,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h3',
		label: 'Heading 4',
		blockType: BlockType.H4,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h3',
		label: 'Heading 5',
		blockType: BlockType.H5,
		canSplit: true,
	}, {
		type: 'Turn into',
		icon: 'bi-type-h3',
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
		icon: 'io-image-outline',
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