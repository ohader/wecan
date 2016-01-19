import {Directive, OnInit} from 'angular2/core';

import {BootstrapNavbarService} from 'app/service/bootstrap-navbar.service';

@Directive({
	selector: 'bootstrap-navbar-brand',
	inputs: ['name']
})

export class BootstrapNavbarBrandDirective implements OnInit {
	public name: string;

	constructor(private _navbarService: BootstrapNavbarService) { }

	ngOnInit() {
		this._navbarService.brand = this;
	}
}