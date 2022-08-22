import externalArrowSVG from '../assets/externalArrowSVG.js';

const SampleData1 = {
	text: '',
	url: '',
	external: true,
};

const outlineLinkUI = (url, text, isExternal) => {
	if (isExternal) {
		const fillColor = `var(--primary-25)`;
		return `
			<a class="outline regular d-flex gap-2 ai-center" href="${url}" target="_blank">
				${text}
				${externalArrowSVG(fillColor)}
			</a>`;
	} else {
		return `<a class="outline regular" href="${url}">${text}</a>`;
	}
};

export default outlineLinkUI;
