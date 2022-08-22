import bodyTextUI from '../texts/bodyTextUI.js';
import titleUI from '../texts/titleUI.js';
import isUndefined from '../../logic/isUndefined.js';
import isUndefinedDouble from '../../logic/isUndefinedDouble.js';
import secondaryLinkUI from '../links/secondaryLinkUI.js';

const SampleData1 = [
	{
		title: '',
		bodyText: '',
		image: {
			attachment: '',
			url: '',
			alt: '',
		},
		link: {
			text: '',
			url: '',
			external: false,
		},
	},
];

const cardCore2 = arrayOfData => {
	return arrayOfData
		.map(item => {
			const { title, bodyText, link, image } = item;
			const { url, text, external } = link;
			const { attachment, alt } = image;

			const loadHeader = `
				<header>
					${isUndefined(title, titleUI(title))}
					${isUndefined(bodyText, bodyTextUI(bodyText))}
				</header>`;

			const loadFooter = `
				<footer>
					${isUndefined(link, secondaryLinkUI(url, text, external))}
				</footer>`;

			const loadImage = `
				<header class="grow-1 h-4 w-fill">
					<a href="${attachment}" target="_blank">
						<img class="img-cover" src="${image.url}" alt="${alt}" />
					</a>
				</header>`;

			return `
				<main class="col wrap-0 bsa-1 ra-1 clip">
					${isUndefined(image, loadImage)}
					<section class="grow-4 pa-4 col h-fill jc-between gap-4">
						${isUndefinedDouble(title, bodyText, loadHeader)}
						${isUndefined(link, loadFooter)}
					</section>
				</main>`;
		})
		.join('');
};

export default cardCore2;
