const isUndefined = (component, loadComponent) =>
	component === '' ||
	component === undefined ||
	component === null ||
	component === 'undefined' ||
	component === 'null' ||
	typeof component === undefined
		? ''
		: loadComponent;

export default isUndefined;
