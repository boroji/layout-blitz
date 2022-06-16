const SampleData1 = [
	{
		title: '',
		bodyText: '',
		imageURL: '',
		linkLabel: '',
		linkURL: '',
	},
];

const cardPattern1 = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(item => {
		const { imageURL, title, linkURL, linkLabel, bodyText } = item;

		const loadImage = `
			<header class="base-4 grow-1 h-fill">
				<img class='img-cover' src='${imageURL}' alt='${title}' />
			</header>
		`;

		const loadLink = `
		<div class="pt-4">
			<a
				class="secondary regular"
				href="${linkURL}"
			>
				${linkLabel}
			</a>
		</div>
		`;

		const loadBody = `
			<p>${bodyText}</p>
		`;

		const loadTitle = `
			<h6>${title}</h6>
		`;

		const loadContent = `
		<div>
			${title === '' ? '' : loadTitle}
			${bodyText === '' ? '' : loadBody}
		</div>
		`;

		return `
		<div class="row wrap-0 ai-start sa-1 ba-1 ra-1 clip">
			<footer class="base-8 grow-8 pa-4 col h-fill jc-between">
				${title === '' && bodyText === '' ? '' : loadContent}
				${linkLabel === '' ? '' : loadLink}
				</footer>
				${imageURL === '' ? '' : loadImage}
			</div>
`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
