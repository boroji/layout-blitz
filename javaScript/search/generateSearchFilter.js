const generateSearchFilter = (htmlElement, searchId) => {
	const input = document.createElement('input');
	input.setAttribute('placeholder', 'Search for keywords...');
	input.setAttribute('id', `${searchId}`);
	input.setAttribute('class', 'td-dynamic-blog-search');
	document.querySelector(`#${htmlElement}`).append(input);
};
