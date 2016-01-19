import {Component} from 'angular2/core';
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {BootstrapNavbarComponent} from 'app/component/bootstrap-navbar.component';
import {BootstrapNavbarBrandDirective} from 'app/directive/bootstrap-navbar-brand.directive';
import {BootstrapNavbarItemDirective} from 'app/directive/bootstrap-navbar-item.directive';

import {WecanHomeComponent} from 'app/component/wecan-home.component';
import {WecanMapComponent} from 'app/component/wecan-map.component';
import {WecanCommunicationComponent} from 'app/component/wecan-communication.component';
import {WecanElementsComponent} from 'app/component/wecan-elements.component';

import {CommunicationMessageCountComponent} from 'app/component/communication-message-count.component';
import {CommunicationStateService} from 'app/service/communication-state.service';

@Component({
	selector: 'wecan-app',
	template: `
		<bootstrap-navbar current-tab="Home" src="src/bootstrap/navbar.html">
			<bootstrap-navbar-brand name="WeCan"></bootstrap-navbar-brand>
			<bootstrap-navbar-item name="Home" target="Home"></bootstrap-navbar-item>
			<bootstrap-navbar-item name="Google Map" target="Map">
				xxx
			</bootstrap-navbar-item>
			<bootstrap-navbar-item name="Communication" target="Communication">
				<communication-message-count></communication-message-count>
			</bootstrap-navbar-item>
			<bootstrap-navbar-item name="Elements" target="Elements"></bootstrap-navbar-item>
		</bootstrap-navbar>

		<router-outlet></router-outlet>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		BootstrapNavbarComponent,
		BootstrapNavbarBrandDirective,
		BootstrapNavbarItemDirective,
		CommunicationMessageCountComponent
	],
	providers: [
		CommunicationStateService
	]
})

@RouteConfig([
	{ path: '/', redirectTo: ['Home'] },
	{ path: '/home', name: 'Home', component: WecanHomeComponent },
	{ path: '/map', name: 'Map', component: WecanMapComponent },
	{ path: '/communication', name: 'Communication', component: WecanCommunicationComponent },
	{ path: '/elements', name: 'Elements', component: WecanElementsComponent }
])

export class AppWecan {
}
