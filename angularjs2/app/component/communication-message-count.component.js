System.register(['angular2/core', 'app/service/communication-state.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, communication_state_service_1;
    var CommunicationMessageCountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (communication_state_service_1_1) {
                communication_state_service_1 = communication_state_service_1_1;
            }],
        execute: function() {
            CommunicationMessageCountComponent = (function () {
                function CommunicationMessageCountComponent(_communicationState) {
                    this._communicationState = _communicationState;
                    console.log('count');
                }
                CommunicationMessageCountComponent = __decorate([
                    core_1.Component({
                        selector: 'communication-message-count',
                        template: "\n\t\t<span *ngIf=\"_communicationState.countMessages()\" class=\"badge\">\n\t\t\t{{_communicationState.countMessages()}}\n\t\t</span>\n\t",
                        styles: [
                            ".badge { margin-left: 1em; }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof communication_state_service_1.CommunicationStateService !== 'undefined' && communication_state_service_1.CommunicationStateService) === 'function' && _a) || Object])
                ], CommunicationMessageCountComponent);
                return CommunicationMessageCountComponent;
                var _a;
            })();
            exports_1("CommunicationMessageCountComponent", CommunicationMessageCountComponent);
        }
    }
});
//# sourceMappingURL=communication-message-count.component.js.map