const isUndefinedDouble = (component, secondComponent, loadComponent) =>
	(component === '' && secondComponent === '') ||
	(component === undefined && secondComponent === undefined) ||
	(component === null && secondComponent === null) ||
	(component === 'undefined' && secondComponent === 'undefined') ||
	(component === 'null' && secondComponent === 'null') ||
	(typeof component === undefined && typeof secondComponent === undefined)
		? ''
		: loadComponent;

export default isUndefinedDouble;
