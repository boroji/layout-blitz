import coreArticleBlocks from '../core/blocks/coreArticleBlocks.js';
import injectUI from '../../core/logic/injectUI.js';

const SampleData1 = [
	{
		leadTitle: '',
		checkLists: [
			{
				title: '',
				bullets: [],
			},
		],
		paragraphs: [
			{
				title: '',
				bodyText: '',
			},
		],
		links: [
			{
				text: '',
				url: '',
				external: true,
				type: 'primary',
			},
		],
		images: [
			{
				attachment: '',
				url: '',
				alt: '',
				caption: '',
			},
		],
		iframes: [
			{
				id: '',
				caption: '',
			},
		],
	},
];

const createArticlePage = (arrayOfData, HTMLElement) => {
	const loadContent = `
		<main class="bsa-1 ba-1 ra-2 py-8">
			${coreArticleBlocks(arrayOfData)}
		</main>`;

	injectUI(loadContent, HTMLElement);
};

export default createArticlePage;
