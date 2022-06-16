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

const headerPattern1 = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(item => {
		const { imageURL, title, linkURL, linkLabel, bodyText, captionText } = item;

		const loadImage = `
			<header class="base-8 h-6">
				<img class='img-cover' src='${imageURL}' alt='${title}' />
			</header>
		`;

		const loadLink = `
		<div class="abt-12 abr-12">
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

		return `
		<div class="row grow-1 wrap-0 ai-start bsa-1 ba-1 ra-2 clip relative">
				${imageURL === '' ? '' : loadImage}
				<footer class="base-10 grow-1 pa-12">
					${title === '' ? '' : loadTitle}
					${bodyText === '' ? '' : loadBody}
					${captionText === '' ? '' : loadCaption}
					</footer>
					${linkLabel === '' ? '' : loadLink}
			</div>
`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
