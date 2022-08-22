import isUndefined from '../logic/isUndefined.js';
import captionUI from '../texts/captionUI.js';

const SampleData1 = {
	attachment: '',
	url: '',
	alt: '',
	caption: '',
	size: '',
};

const generateImages = arrayOfData =>
	arrayOfData
		.map(item => {
			const { attachment, alt, url, caption, size } = item;
			return `
				<div class='mw-${size} col wrap-0 gap-1'>
          <a href='${attachment}' target='_blank'>
            <img class='w-fill h-auto clip ra-2' src='${url}' alt='${alt}' />
          </a>
          ${isUndefined(caption, captionUI(caption))}
        </div>`;
		})
		.join('');

export default generateImages;
