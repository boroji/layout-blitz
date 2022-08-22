const injectUI = (arrayOfData, htmlElement) => {
	document.querySelector(`#${htmlElement}`).innerHTML = arrayOfData;
};

export default injectUI;
