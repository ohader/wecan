import {Directive, ElementRef, OnInit} from 'angular2/core';

import {BootstrapNavbarService} from 'app/service/bootstrap-navbar.service';

@Directive({
	selector: 'bootstrap-navbar-item',
	inputs: ['name', 'target']
})

export class BootstrapNavbarItemDirective implements OnInit {
	public name: string;
	public target: string;

	public routerLink: string[];

	constructor(private _navbarService: BootstrapNavbarService, private _element: ElementRef) {

	}

	ngOnInit() {
		this.routerLink = [this.target];
		this._navbarService.items.push(this);
	}
}