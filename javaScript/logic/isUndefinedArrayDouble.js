const isUndefinedArrayDouble = (component, secondComponent, loadComponent) =>
	(component.length === 0 && secondComponent.length === 0) ||
	(component === undefined && secondComponent === undefined) ||
	(component === null && secondComponent === null) ||
	(component === 'undefined' && secondComponent === 'undefined') ||
	(component === 'null' && secondComponent === 'null') ||
	(typeof component === undefined && typeof secondComponent === undefined)
		? ''
		: loadComponent;

export default isUndefinedArrayDouble;
