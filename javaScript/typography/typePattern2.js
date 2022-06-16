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

const typePattern2 = (arrayOfData, HTMLElement) => {
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
			<div class="w-4 h-4 ra-2 clip">
				<img class='img-cover ra-2' src='${imageURL}' alt='${leadTitle}' />
			</div>
		`;

		const loadContent = `
		<div class="row wrap-0 ai-start bsa-1 ba-1 ra-2 clip pa-8 gap-8">
			${imageURL === '' ? '' : loadImage}
			<div class="col gap-4">  
				${leadTitle === '' ? '' : loadLeadTitle}
				${paragraphs.length === 0 ? '' : loadParagraphs}
				${links.length === 0 ? '' : loadLink}
			</div>
		</div>
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
