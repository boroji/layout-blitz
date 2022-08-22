import titleUI from '../texts/titleUI.js';
import bodyTextUI from '../texts/bodyTextUI.js';
import isUndefined from '../logic/isUndefined.js';

const SampleData1 = [
	{
		title: '',
		bodyText: '',
	},
];

const generateParagraphs = arrayOfData =>
	arrayOfData
		.map(item => {
			const { title, bodyText } = item;
			return `
				<div class="col wrap-0">
					${isUndefined(title, titleUI(title))} 
					${isUndefined(bodyText, bodyTextUI(bodyText))}
				</div>`;
		})
		.join('');

export default generateParagraphs;
