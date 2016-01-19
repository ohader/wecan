import {Component} from 'angular2/core';

import {CommunicationStateService} from 'app/service/communication-state.service';

@Component({
	selector: 'communication-message-count',
	template: `
		<span *ngIf="_communicationState.countMessages()" class="badge">
			{{_communicationState.countMessages()}}
		</span>
	`,
	styles: [
		`.badge { margin-left: 1em; }`
	]
})

export class CommunicationMessageCountComponent {
	constructor(private _communicationState: CommunicationStateService) {
		console.log('count');

	}
}