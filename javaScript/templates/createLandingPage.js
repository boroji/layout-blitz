import cardCore2 from '../../core/cards/cardCore2.js';
import cardCore3 from '../../core/cards/cardCore3.js';
import cardCore4 from '../../core/cards/cardCore4.js';
import injectUI from '../logic/injectUI.js';
import isUndefinedArray from '../logic/isUndefinedArray.js';
import isUndefinedArrayDouble from '../logic/isUndefinedArrayDouble.js';

const SampleData1 = [
	{
		headers: [
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
		],
		sidebars: [
			{
				title: '',
				bodyText: '',
				link: {
					text: '',
					url: '',
					external: false,
				},
			},
		],
		cards: [
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
		],
	},
];

const createLandingPage = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(({ headers, sidebars, cards }) => {
		const loadHeader = `<header class="col wrap-0 ai-center gap-4">${cardCore4(
			headers,
		)}</header>`;

		const loadCard = `<aside class="fluid-5 grow-12 trim-1 base-4 gap-4">${cardCore2(
			cards,
		)}</aside>`;

		const loadSidebar = `
			<div class="grow-2 trim-4 base-5">
				<aside class="col gap-4">${cardCore3(sidebars)}</aside>
			</div>`;

		const loadContent = `
			<section class="row ai-start gap-4">
				${isUndefinedArray(cards, loadCard)}
				${isUndefinedArray(sidebars, loadSidebar)}
			</section>`;

		return `
				<main class="col wrap-0 gap-4">
					${isUndefinedArray(headers, loadHeader)}
					${isUndefinedArrayDouble(cards, sidebars, loadContent)}
				</main>`;
	});

	injectUI(mappingOverData, HTMLElement);
};

export default createLandingPage;
