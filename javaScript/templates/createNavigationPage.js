import cardCore1 from '../../core/cards/cardCore1.js';
import injectUI from '../../core/logic/injectUI.js';
import isUndefined from '../../core/logic/isUndefined.js';
import isUndefinedDouble from '../../core/logic/isUndefinedDouble.js';
import leadTitleUI from '../../core/texts/leadTitleUI.js';
import bodyTextUI from '../../core/texts/bodyTextUI.js';

const sampleData1 = [
	{
		leadTitle: '',
		bodyText: '',
		navigation: [
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
		],
	},
];

const createNavigationPage = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(({ leadTitle, bodyText, navigation }) => {
		const loadHeader = `
      <div class="col wrap-0 gap-1">
        ${isUndefined(leadTitle, leadTitleUI(leadTitle))} 
        ${isUndefined(bodyText, bodyTextUI(bodyText))}
      </div>`;

		return `
      <main class="col wrap-0 gap-4">
        ${isUndefinedDouble(leadTitle, bodyText, loadHeader)}
				<div class="col wrap-0 gap-4">
        	${cardCore1(navigation)}
				</div>
      </main>`;
	});

	injectUI(mappingOverData, HTMLElement);
};

export default createNavigationPage;
