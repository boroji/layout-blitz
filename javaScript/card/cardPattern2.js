const SampleData1 = [
	{
		title: '',
		bodyText: '',
		imageURL: '',
		linkLabel: '',
		linkURL: '',
	},
];

const cardPattern2 = (arrayOfData, HTMLElement) => {
	const mappingOverData = arrayOfData.map(item => {
		const { imageURL, title, linkURL, linkLabel, bodyText } = item;

		const loadImage = `
			<header class="grow-1 h-4 w-fill">
				<img class='img-cover' src='${imageURL}' alt='${title}' />
			</header>
		`;

		const loadLink = `
		<div>
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
		<div class="col wrap-0 sa-1 ba-1 ra-1 clip">
				${imageURL === '' ? '' : loadImage}
				<footer class="grow-4 pa-4 col h-fill jc-between gap-4">
					${title === '' && bodyText === '' ? '' : loadContent}
					${linkLabel === '' ? '' : loadLink}
				</footer>
			</div>
`;
	});

	const joinedData = mappingOverData.join('');
	document.querySelector(`#${HTMLElement}`).innerHTML = joinedData;
};
