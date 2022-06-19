const SampleData1 = [
	{
		leadTitle: '',
		paragraphs: [
			{
				title: '',
				textBefore: '',
				textMiddle: '',
				highlightClass: '',
				highlightClass2: '',
				textAfter: '',
			},
		],
	},
];

const textColor = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map((item, idx) => {
		const { leadTitle, paragraphs } = item;

		const loadLeadTitle = `<h2 class="cc-1">${leadTitle}</h2>`;

		const generateParagraphs = paragraphs
			.map(item => {
				const {
					title,
					textBefore,
					textAfter,
					textMiddle,
					highlightClass,
					highlightClass2,
				} = item;

				const loadTitle = `<h6 class="cc-4">${title}</h6>`;
				return `
					<div class="row wrap-0 gap-4 bsa-1 ba-1 ra-2 clip">	
						<div class="col wrap-0 grow-8 base-6 pa-4">
							${title === '' ? '' : loadTitle}
							<p class="cc-4">
								${textBefore}
								<span class="d-inline h6-500 pa-1 ra-1 gray-2">${highlightClass}</span>
								${textMiddle}
								<span class="d-inline h6-500 pa-1 ra-1 advice-3">${highlightClass2}</span>
								${textAfter}
							</p>
						</div>
						<div class="grow-1 base-8 col wrap-0 jc-center ai-center h3-700 ${highlightClass} ${highlightClass2}">Text Color</div>
					</div>
					`;
			})
			.join('');

		const loadParagraphs = `
      <div class="col gap-4 wrap-0">
        ${paragraphs.length === 0 ? '' : generateParagraphs}
      </div>`;

		const border = `
      <div class="h-1 col jc-center ai-center">
        <svg width="100%" height="1" fill="none">
          <rect width="100%" height="1" fill="#F2F2F2" />
        </svg>
      </div>`;

		const loadContent = `
      <div class="col wrap-0 gap-1">
        <div class="col wrap-0 gap-6">  
          ${leadTitle === '' ? '' : loadLeadTitle}
          ${paragraphs.length === 0 ? '' : loadParagraphs}
        </div>
      </div>
      ${idx < arrayOfData.length - 1 ? border : ''}`;

		return `${paragraphs.length === 0 && leadTitle === '' ? '' : loadContent}`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
