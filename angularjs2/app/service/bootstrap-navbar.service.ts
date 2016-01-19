import {Injectable} from 'angular2/core';

import {BootstrapNavbarBrandDirective} from 'app/directive/bootstrap-navbar-brand.directive';
import {BootstrapNavbarItemDirective} from 'app/directive/bootstrap-navbar-item.directive';

@Injectable()

export class BootstrapNavbarService {
	public brand: BootstrapNavbarBrandDirective = null;
	public items: BootstrapNavbarItemDirective[] = [];
}