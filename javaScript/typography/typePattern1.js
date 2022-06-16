const SampleData1 = [
	{
		leadTitle: '',
		paragraphs: [
			{
				title: '',
				bodyText: '',
			},
		],
		links: [
			{
				linkLabel: '',
				linkURL: '',
			},
		],
		imageURL: '',
	},
];

const typePattern1 = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map((item, idx) => {
		const { leadTitle, paragraphs, imageURL, links } = item;

		const loadLeadTitle = `<h2 class="cc-1">${leadTitle}</h2>`;

		const generateParagraphs = paragraphs
			.map(
				item => `
								<div class="col gap-1">
									<h6 class="cc-4">${item.title}</h6>
									<p class="cc-4">${item.bodyText}</p>
								</div>
								`,
			)
			.join('');

		const generateLinks = links
			.map(
				item =>
					`<a class="secondary regular" href="${item.linkURL}">${item.linkLabel}</a>`,
			)
			.join('');

		const loadLink = `
			<div class="row gap-2">
				${links.length === 0 ? '' : generateLinks}
			</div>
		`;

		const loadParagraphs = `
		<div class="col gap-4">
			${paragraphs.length === 0 ? '' : generateParagraphs}
		</div>
		`;

		const loadImage = `
			<div class="mw-15 pt-4">
				<img class='w-fill h-auto clip ra-2' src='${imageURL}' alt='${leadTitle}' />
			</div>
		`;

		const border = `
		<div class="h-1 col jc-center ai-center">
			<svg width="100%" height="1" fill="none">
				<rect width="100%" height="1" fill="#F2F2F2" />
			</svg>
		</div>
		`;

		const loadContent = `
		<div class="col gap-2">
			<div class="col gap-6">  
				${leadTitle === '' ? '' : loadLeadTitle}
				${paragraphs.length === 0 ? '' : loadParagraphs}
			</div>
			${links.length === 0 ? '' : loadLink}
			${imageURL === '' ? '' : loadImage}
		</div>
		${idx < arrayOfData.length - 1 ? border : ''}
		`;

		return `${
			paragraphs.length === 0 && leadTitle === '' && linkLabel === '' && imageURL === ''
				? ''
				: loadContent
		}`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
