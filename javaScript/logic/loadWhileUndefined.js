const loadWhileUndefined = (component, loadAlternate, loadComponent) =>
	component === '' ||
	component === undefined ||
	component === null ||
	component === 'undefined' ||
	component === 'null' ||
	typeof component === undefined
		? loadAlternate
		: loadComponent;

export default loadWhileUndefined;
