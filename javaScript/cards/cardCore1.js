import isUndefinedArray from '../logic/isUndefinedArray.js';
import generateCustomLinks from '../articles/generateCustomLinks.js';
import isUndefined from '../logic/isUndefined.js';
import isUndefinedDouble from '../logic/isUndefinedDouble.js';
import imageUI from '../assets/imageUI.js';
import titleUI from '../texts/titleUI.js';
import bodyTextUI from '../texts/bodyTextUI.js';

const SampleData1 = [
	{
		title: '',
		bodyText: '',
		image: {
			attachment: '',
			alt: '',
			url: '',
			caption: '',
			size: '',
			fluid: false,
		},
		links: [
			{
				text: '',
				url: '',
				external: true,
				type: 'primary',
			},
		],
	},
];

const cardCore1 = arrayOfData =>
	arrayOfData
		.map(item => {
			const { image, links, title, bodyText } = item;
			const { attachment, alt, url, caption, size, fluid } = image;

			const loadHeader = `
				<header>
					${isUndefined(title, titleUI(title))}
					${isUndefined(bodyText, bodyTextUI(bodyText))}
				</header>`;

			const loadLinks = `
				<div class="row gap-2">
					${generateCustomLinks(links)}
				</div>`;

			return `
      <div class="row wrap-0 ai-start bsa-1 ba-1 ra-2 clip pa-8 gap-8">
				${isUndefined(image, imageUI(attachment, alt, url, caption, size, fluid))}
				<footer class="grow-1 col wrap-0 gap-6">
					${isUndefinedDouble(title, bodyText, loadHeader)}
				  ${isUndefinedArray(links, loadLinks)}
        </footer>
			</div>`;
		})
		.join('');

export default cardCore1;
