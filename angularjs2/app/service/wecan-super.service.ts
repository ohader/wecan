import {Injectable} from 'angular2/core';

@Injectable()
export class WecanSuperService {
	/**
	 * @param {Object} concreteInstance
	 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/set
	 * @see https://github.com/Microsoft/TypeScript/issues/338
	 */
	static provide(concreteInstance: Object): void {
		var superInstance: Object = Object.getPrototypeOf(concreteInstance.constructor.prototype);
		var propertyName: string, concreteDescriptor: PropertyDescriptor, superDescriptor: PropertyDescriptor;

		if (!superInstance || concreteInstance === superInstance) {
			return;
		}

		for (propertyName in concreteInstance) {
			if (!superInstance.hasOwnProperty(propertyName)) {
				continue;
			}

			concreteDescriptor = Object.getOwnPropertyDescriptor(concreteInstance, propertyName);
			superDescriptor = Object.getOwnPropertyDescriptor(superInstance, propertyName);

			if (superDescriptor && superDescriptor.set && (!concreteDescriptor || !concreteDescriptor.set)) {
				Object.defineProperty(concreteInstance, propertyName, { set: superDescriptor.set });
			}
			if (superDescriptor && superDescriptor.get && (!concreteDescriptor || !concreteDescriptor.get)) {
				Object.defineProperty(concreteInstance, propertyName, { get: superDescriptor.get });
			}
		}
	}
}