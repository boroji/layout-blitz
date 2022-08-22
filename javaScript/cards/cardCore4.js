import leadTitleUI from '../texts/leadTitleUI.js';
import captionUI from '../texts/captionUI.js';
import bodyTextUI from '../texts/bodyTextUI.js';
import titleUI from '../texts/titleUI.js';
import isUndefined from '../../logic/isUndefined.js';
import isUndefinedDouble from '../../logic/isUndefinedDouble.js';
import primaryLinkUI from '../links/primaryLinkUI.js';

const SampleData1 = [
	{
		leadTitle: '',
		title: '',
		bodyText: '',
		image: {
			attachment: '',
			url: '',
			alt: '',
			caption: '',
		},
		link: {
			text: '',
			url: '',
			external: false,
		},
	},
];

const cardCore4 = arrayOfData => {
	return arrayOfData
		.map(item => {
			const { leadTitle, title, bodyText, link, image, iframe } = item;
			const { url, text, external } = link;
			const { attachment, alt, caption } = image;

			const loadText = `
				<header class="col gap-2">
					${isUndefined(title, titleUI(title))}
					${isUndefined(bodyText, bodyTextUI(bodyText))}
				</header>`;

			const loadImage = `
				<aside class="base-6 col wrap-0 gap-1">
					<a href="${attachment}" target="_blank">
						<img class="w-fill h-auto clip ra-2" src="${image.url}" alt="${alt}" />
					</a>
					${isUndefined(caption, captionUI(caption))}
				</aside>`;

			const loadIframe = `
				<div class="base-8 col wrap-0 gap-1 ra-2 clip">
					${isUndefined(iframe, iframeUI(iframe.id))}
					${isUndefined(iframe.caption, captionUI(iframe.caption))}
				</div>
			`;

			return `
					<main class="row ai-start w-fill bsa-1 ba-1 ra-2 clip pa-8 gap-8">
						<section class="col gap-4 wrap-0 base-8 grow-1">
							${isUndefined(leadTitle, leadTitleUI(leadTitle))}
							${isUndefinedDouble(title, bodyText, loadText)}
							${isUndefined(link, primaryLinkUI(url, text, external))}
						</section>
						${isUndefined(iframe, loadIframe)}
						${isUndefined(image, loadImage)}
					</main>`;
		})
		.join('');
};

export default cardCore4;
