import titleUI from '../texts/titleUI.js';
import isUndefined from '../logic/isUndefined.js';
import isUndefinedArray from '../logic/isUndefinedArray.js';
import bulletCheckSVG from '../assets/bulletCheckSVG.js';

const SampleData1 = [
	{
		title: '',
		bullets: [],
	},
];

const generateBullets = arrayOfData =>
	arrayOfData
		.map(item => {
			const { title, bullets } = item;

			const bulletStyles = `
				display: grid;
				grid-template-columns: 24px auto;
				gap: 12px;
				line-height: 24px;`;

			const alignSVG = `transform: translateY(4px)`;

			const fixLineHeight = `
				line-height: 24px;
				display: flex;
				align-items: center;`;

			const loadBullets = bullets
				.map(
					item => `
						<div style="${bulletStyles}">
							<div style="${alignSVG}">
								${bulletCheckSVG('var(--gray-94)', 'var(--gray-30)')}
							</div>
							<p class="cc-4" style="${fixLineHeight}">${item}</p>
						</div>`,
				)
				.join('');

			return `
				<div class="col wrap-0 gap-2">
					${isUndefined(title, titleUI(title))}
					<div class="col wrap-0 gap-3">
						${isUndefinedArray(bullets, loadBullets)}
					</div>
				</div>`;
		})
		.join('');

export default generateBullets;
