import isUndefined from '../logic/isUndefined.js';
import captionUI from '../texts/captionUI.js';

const SampleData1 = {
	attachment: '',
	alt: '',
	url: '',
	caption: '',
	size: '',
	fluid: false,
};

const imageUI = (attachment, alt, url, caption, size, isFluid) => {
	const linkStyle = `
    display: inline-flex;
    align-items: center;
    justify-content: center;`;

	if (isFluid) {
		return `
      <div class='mw-${size} col wrap-0 gap-1'>
        <a href='${attachment}' target='_blank' style="${linkStyle}">
          <img class='w-fill h-auto clip ra-2' src='${url}' alt='${alt}' />
        </a>
        ${isUndefined(caption, captionUI(caption))}
      </div>`;
	} else {
		return `
      <div class='col wrap-0 gap-1'>
        <a href='${attachment}' target='_blank' style="${linkStyle}">
          <img class='w-${size} clip ra-2' src='${url}' alt='${alt}' />
        </a>
        ${isUndefined(caption, captionUI(caption))}
      </div>`;
	}
};

export default imageUI;
