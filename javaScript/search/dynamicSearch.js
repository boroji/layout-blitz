const dynamicSearch = (
	arrayOfData,
	displayContent,
	displayTabs,
	displaySearch,
	searchId = 'td-dynamic-search',
	coreUI,
) => {
	const generateUI = arrayOfData => {
		return coreUI(arrayOfData);
	};

	injectUI(generateUI(arrayOfData), displayContent);
	injectUI(generateUniqueTabs(arrayOfData), displayTabs);
	generateSearchFilter(displaySearch, searchId);
	filterUI(arrayOfData, displayContent, searchId, generateUI);
};
