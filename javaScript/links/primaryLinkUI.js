import externalArrowSVG from '../assets/externalArrowSVG.js';

const SampleData1 = {
	text: '',
	url: '',
	external: true,
};

const primaryLinkUI = (url, text, isExternal) => {
	if (isExternal) {
		const fillColor = `var(--gray-100)`;
		return `
			<a class="solid regular d-flex gap-2 ai-center" href="${url}" target="_blank">
				${text}
				${externalArrowSVG(fillColor)}
			</a>`;
	} else {
		return `<a class="solid regular" href="${url}">${text}</a>`;
	}
};

export default primaryLinkUI;
