const filterUI = (arrayOfData, htmlElement, searchId, coreUI) => {
	const buttons = document.querySelectorAll('.dynamic-blog-tabs');
	buttons.forEach(btn => {
		btn.addEventListener('click', e => {
			buttons.forEach(eachButton => eachButton.classList.remove('active'));
			e.target.classList.add('active');

			const tabsCategory = e.target.dataset.category;

			const filterHTML = arrayOfData.filter(item => {
				if (item.leadTitle.replaceAll(/[\s\/\\'",:&\?\)\(]/gi, '') === tabsCategory) {
					return item;
				}
			});

			if (tabsCategory === 'All') {
				return injectUI(coreUI(arrayOfData), `${htmlElement}`);
			} else {
				return injectUI(coreUI(filterHTML), `${htmlElement}`);
			}
		});
	});

	document.querySelector(`#${searchId}`).addEventListener('input', e => {
		const searchValue = e.target.value;

		const filterBySearch = arrayOfData.filter(item => {
			return item.leadTitle
				.toLowerCase()
				.trim()
				.includes(searchValue.toLowerCase().trim());
		});

		if (filterBySearch.length === 0) {
			injectUI(
				`<div class="pa-4 ma-8 error-2 ra-1">Sorry, no results found</div>`,
				`${htmlElement}`,
			);
		} else {
			injectUI(coreUI(filterBySearch), `${htmlElement}`);
		}
	});
};
