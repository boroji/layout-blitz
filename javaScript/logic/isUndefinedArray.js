const isUndefinedArray = (component, loadComponent) =>
	component.length === 0 ||
	component === undefined ||
	component === null ||
	component === 'undefined' ||
	component === 'null' ||
	typeof component === undefined
		? ''
		: loadComponent;

export default isUndefinedArray;
