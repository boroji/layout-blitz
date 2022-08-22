import externalArrowSVG from '../assets/externalArrowSVG.js';

const SampleData1 = {
	text: '',
	url: '',
	external: true,
};

const secondaryLinkUI = (url, text, isExternal) => {
	if (isExternal) {
		const fillColor = `var(--secondary-30)`;
		return `
			<a class="secondary regular d-flex gap-2 ai-center" href="${url}" target="_blank">
				${text}
				${externalArrowSVG(fillColor)}
			</a>`;
	} else {
		return `<a class="secondary regular" href="${url}">${text}</a>`;
	}
};

export default secondaryLinkUI;
