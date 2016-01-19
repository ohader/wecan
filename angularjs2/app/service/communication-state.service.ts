import {Injectable} from 'angular2/core';

import {CommunicationMessage} from 'app/interface/communication.interface';

@Injectable()
export class CommunicationStateService {
	protected _messages: CommunicationMessage[] = [];

	addMessage() {

	}

	countMessages(): number {
		return this._messages.length;
	}

	get messages() {

	}
}