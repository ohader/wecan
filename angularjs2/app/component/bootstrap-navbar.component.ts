import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {BootstrapNavbarBrandDirective} from 'app/directive/bootstrap-navbar-brand.directive';
import {BootstrapNavbarItemDirective} from 'app/directive/bootstrap-navbar-item.directive';

import {BootstrapNavbarService} from 'app/service/bootstrap-navbar.service';

@Component({
	selector: 'bootstrap-navbar',
	templateUrl: 'app/component/bootstrap-navbar.html',
	// Create one instance of the BootstrapNavbarService
	// which is shared as kind of a singleton for *-brand and *-item
	providers: [BootstrapNavbarService],
	directives: [ROUTER_DIRECTIVES]
})

export class BootstrapNavbarComponent implements OnInit {
	constructor(private _navbarService: BootstrapNavbarService) { }

	ngOnInit() {
	}
}