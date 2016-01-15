System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(zone) {
                    this.someVariable = 'Say it...';
                    this.recognition = null;
                    this.recognizing = false;
                    this.recogizedPhrase = '';
                    this.zone = zone;
                    this.listenInit();
                }
                AppComponent.prototype.isRecognizing = function () {
                    return this.recognizing;
                };
                ;
                AppComponent.prototype.getRecogizedPhrase = function () {
                    return this.recogizedPhrase || 'Say it ...';
                };
                ;
                AppComponent.prototype.listen = function (phrase) {
                    if (this.isRecognizing()) {
                        this.recognition.stop();
                    }
                    else {
                        this.recognition.lang = phrase.languageId;
                        this.recognition.start();
                    }
                };
                AppComponent.prototype.listenInit = function () {
                    if ('webkitSpeechRecognition' in window) {
                        this.recognition = new webkitSpeechRecognition();
                        this.recognition.continuous = false;
                        this.recognition.interimResults = true;
                        var that = this;
                        this.recognition.onstart = function () {
                            that.recognizing = true;
                        };
                        this.recognition.onerror = function (event) {
                            that.recogizedPhrase = "There was a recognition error...";
                        };
                        this.recognition.onend = function () {
                            that.recognizing = false;
                        };
                        this.recognition.onresult = function (event) {
                            that.zone.run(function () {
                                var interimTranscript = '';
                                // Assemble the transcript from the array of results
                                for (var i = event.resultIndex; i < event.results.length; ++i) {
                                    var confid = event.results[i][0].confidence, confidFix = parseFloat((Math.round(confid * 100) / 100).toFixed()).toFixed(2);
                                    if (event.results[i].isFinal) {
                                        that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
                                        that.recognition.stop();
                                        that.recognizing = false;
                                        console.log(that.recogizedPhrase);
                                        that.someVariable = that.recogizedPhrase.toString();
                                    }
                                    else {
                                        that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
                                        console.log(that.recogizedPhrase);
                                        that.someVariable = that.recogizedPhrase.toString();
                                    }
                                }
                            });
                        };
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>My First Angular 2 Beta.0 App</h1>\n    <div><input [(ngModel)]=\"someVariable\" placeholder=\"name\"></div>\n    <div (click)=\"listen('phrase')\">\n    Start timer\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map