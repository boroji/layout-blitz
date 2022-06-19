const SampleData1 = [
	{
		title: '',
		bodyText: '',
		captionText: '',
		imageURL: '',
		linkLabel: '',
		linkURL: '',
	},
];

const headerPattern2 = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(item => {
		const { imageURL, title, linkURL, linkLabel, bodyText, captionText } = item;

		const loadImage = `
			<header class="base-8">
				<img class='w-fill h-auto clip ra-2' src='${imageURL}' alt='${title}' />
			</header>
		`;

		const loadLink = `
		<div>
			<a
					class="solid regular"
					href="${linkURL}"
				>
				${linkLabel}
			</a>
		</div>
		`;

		const loadBody = `
			<div class="h5-400 cl-gr-40 cc-4">${bodyText}</div>
		`;

		const loadCaption = `
			<div class="cp-400 cl-gr-70 cc-4">${captionText}</div>
		`;

		const loadTitle = `
			<div class="h1-700 cl-gr-20 nls-2 cc-1">${title}</div>
		`;

		const loadContent = `
		<div>
			${title === '' ? '' : loadTitle}
			${bodyText === '' ? '' : loadBody}
			${captionText === '' ? '' : loadCaption}
		</div>
		`;

		return `
			<div class="row ai-start bsa-1 ba-1 ra-2 clip pa-8 gap-8">
				<footer class="col gap-4 grow-1 base-6">
					${title === '' && bodyText === '' && captionText === '' ? '' : loadContent}
					${linkLabel === '' ? '' : loadLink}
				</footer>
				${imageURL === '' ? '' : loadImage}
			</div>
`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
