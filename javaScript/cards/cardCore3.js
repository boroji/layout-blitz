import bodyTextUI from '../texts/bodyTextUI.js';
import titleUI from '../texts/titleUI.js';
import isUndefined from '../../logic/isUndefined.js';
import isUndefinedDouble from '../../logic/isUndefinedDouble.js';
import outlineLinkUI from '../links/outlineLinkUI.js';

const SampleData1 = [
	{
		title: '',
		bodyText: '',
		link: {
			text: '',
			url: '',
			external: false,
		},
	},
];

const cardCore3 = arrayOfData => {
	return arrayOfData
		.map(item => {
			const { title, bodyText, link } = item;
			const { url, text, external } = link;

			const loadContent = `
				<div class="col gap-1">
					${isUndefined(title, titleUI(title))}
					${isUndefined(bodyText, bodyTextUI(bodyText))}
				</div>`;

			return `
						<section class="col wrap-0 gap-4 bsa-1 ba-1 ra-2 clip pa-8">
							${isUndefinedDouble(title, bodyText, loadContent)}
							${isUndefined(link, outlineLinkUI(url, text, external))}
						</section>`;
		})
		.join('');
};

export default cardCore3;
