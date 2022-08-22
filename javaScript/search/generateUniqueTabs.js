const generateUniqueTabs = arrayOfData => {
	return arrayOfData
		.reduce(
			(total, current) => {
				if (!total.includes(current.leadTitle)) {
					total.push(current.leadTitle);
				}
				return total;
			},
			['All'],
		)
		.map(leadTitle =>
			leadTitle === ''
				? ''
				: `<div
							data-category="${leadTitle.replaceAll(/[\s\/\\'",:&\?\)\(]/gi, '')}"
							class="dynamic-blog-tabs">${leadTitle}
					</div>`,
		)
		.join('');
};
