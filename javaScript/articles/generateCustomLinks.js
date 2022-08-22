import primaryLinkUI from '../links/primaryLinkUI.js';
import secondaryLinkUI from '../links/secondaryLinkUI.js';
import outlineLinkUI from '../links/outlineLinkUI.js';

const SampleData1 = [
	{
		text: '',
		url: '',
		external: true,
		type: 'primary',
	},
];

const generateCustomLinks = arrayOfData =>
	arrayOfData
		.map(item => {
			const { url, text, external, type } = item;
			if (type === 'primary') {
				return primaryLinkUI(url, text, external);
			}
			if (type === 'secondary') {
				return secondaryLinkUI(url, text, external);
			}
			if (type === 'outline') {
				return outlineLinkUI(url, text, external);
			}
		})
		.join('');

export default generateCustomLinks;
