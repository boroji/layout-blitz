import isUndefined from '../../logic/isUndefined.js';
import isUndefinedArray from '../../logic/isUndefinedArray.js';
import leadTitleUI from '../texts/leadTitleUI.js';
import horizontalBorder from '../articles/horizontalBorder.js';
import generateCustomLinks from '../articles/generateCustomLinks.js';
import generateParagraphs from '../articles/generateParagraphs.js';
import generateImages from '../articles/generateImages.js';
import generateBullets from '../articles/generateBullets.js';

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
				size: '',
			},
		],
	},
];

const coreArticleBlocks = arrayOfData =>
	arrayOfData
		.map((item, idx) => {
			const { leadTitle, paragraphs, images, links, checkLists, iframes } = item;

			const loadChecklists = `
				<div class="col wrap-0 gap-4">
					${generateBullets(checkLists)}
				</div>`;

			const loadParagraphs = `
				<div class="col wrap-0 gap-4">
					${generateParagraphs(paragraphs)}
				</div>`;

			const loadLinks = `
				<div class="row gap-4">
					${generateCustomLinks(links)}
				</div>`;

			const loadImages = `
				<div class="row gap-4">
					${generateImages(images)}
				</div>`;

			return ` 
				<div class="w-fill col wrap-0 gap-6 px-8">  
					${isUndefined(leadTitle, leadTitleUI(leadTitle))}
					${isUndefinedArray(paragraphs, loadParagraphs)}
					${isUndefinedArray(checkLists, loadChecklists)}
					${isUndefinedArray(links, loadLinks)}
					${isUndefinedArray(images, loadImages)}
				</div>
				${idx < arrayOfData.length - 1 ? horizontalBorder('var(--gray-94)') : ''}`;
		})
		.join('');

export default coreArticleBlocks;
