"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var popover_component_1 = require('./popover.component');
var PopoverDirective = (function () {
    // Constructor
    function PopoverDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
    }
    // Event listeners
    PopoverDirective.prototype.showOnHover = function () {
        this.show();
    };
    PopoverDirective.prototype.hideOnHover = function () {
        this.hide();
    };
    // Public Methods
    PopoverDirective.prototype.toggle = function () {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    PopoverDirective.prototype.show = function () {
        if (this.visible) {
            return;
        }
        this.visible = true;
        var factory = this.resolver.resolveComponentFactory(popover_component_1.PopoverComponent);
        this.popover = this.viewContainerRef.createComponent(factory);
        var popover = this.popover.instance;
        popover.popover = this;
        popover.body = this.body;
        if (this.position !== undefined) {
            popover.position = this.position;
        }
        if (this.header !== undefined) {
            popover.header = this.header;
        }
    };
    PopoverDirective.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        this.popover.destroy();
    };
    PopoverDirective.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    __decorate([
        core_1.Input('suprePopoverBody'), 
        __metadata('design:type', Object)
    ], PopoverDirective.prototype, "body", void 0);
    __decorate([
        core_1.Input('suprePopoverPosition'), 
        __metadata('design:type', String)
    ], PopoverDirective.prototype, "position", void 0);
    __decorate([
        core_1.Input('suprePopoverHeader'), 
        __metadata('design:type', String)
    ], PopoverDirective.prototype, "header", void 0);
    __decorate([
        core_1.HostListener('focusin'),
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PopoverDirective.prototype, "showOnHover", null);
    __decorate([
        core_1.HostListener('focusout'),
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PopoverDirective.prototype, "hideOnHover", null);
    PopoverDirective = __decorate([
        core_1.Directive({
            selector: '[suprePopoverBody]',
            exportAs: 'suprePopoverBody'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], PopoverDirective);
    return PopoverDirective;
}());
exports.PopoverDirective = PopoverDirective;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/popover.directive.js.map