const bulletCheckSVG = (rect, fill) => `
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="4" fill="${rect}"/>
<path d="M9.77273 15.0341L6.78977 12.0511C6.46028 11.7216 5.92608 11.7216 5.59659 12.0511V12.0511C5.2671 12.3806 5.2671 12.9148 5.59659 13.2443L9.77273 17.4205L19.4034 7.78977C19.7329 7.46028 19.7329 6.92608 19.4034 6.59659V6.59659C19.0739 6.2671 18.5397 6.2671 18.2102 6.59659L9.77273 15.0341Z" fill="${fill}"/>
</svg>`;

export default bulletCheckSVG;
