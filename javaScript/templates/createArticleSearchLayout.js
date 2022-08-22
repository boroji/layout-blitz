const createArticleSearchLayout = (
	displayContent,
	displayTabs,
	displaySearch,
	HTMLElement,
) => {
	const loadContent = `
	<main class="row gap-8 relative bsa-1 ba-1 ra-2">
		<header id="${displayContent}" class="col wrap-0 grow-8 base-10 br-1 py-8"></header>
		<footer class="str-0 grow-1 base-6 pr-8 py-8">
			<section class="w-10 stt-24 col wrap-0 gap-4">
				<div id="${displaySearch}"></div>
				<div id="${displayTabs}" class="row gap-4"></div>
			</section>
		</footer>
	</main>`;

	injectUI(loadContent, HTMLElement);
};

const combineArticleSearchLayout = (
	arrayOfData,
	displayContent,
	displayTabs,
	displaySearch,
	HTMLElement,
	searchId,
	coreUI,
) => {
	createArticleSearchLayout(displayContent, displayTabs, displaySearch, HTMLElement);
	dynamicSearch(
		arrayOfData,
		displayContent,
		displayTabs,
		displaySearch,
		searchId,
		coreUI,
	);
};
