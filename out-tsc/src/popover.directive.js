"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Popover_1 = require('../node_modules/ng2-popover/src/Popover');
var PopoverDirective = (function (_super) {
    __extends(PopoverDirective, _super);
    // Constructor
    function PopoverDirective(viewContainerRef, resolver) {
        _super.call(this, viewContainerRef, resolver);
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.popoverOnHover = true;
        this.popoverDisabled = false;
        this.popoverAnimation = false;
        this.popoverDismissTimeout = 0;
        // Properties
        this.PopoverComponent = popover_component_1.PopoverComponent;
    }
    // Event listeners
    PopoverDirective.prototype.showOrHideOnClick = function () {
        if (this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.toggle();
    };
    PopoverDirective.prototype.showOnHover = function () {
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.show();
    };
    PopoverDirective.prototype.hideOnHover = function () {
        if (this.popoverCloseOnMouseOutside) {
            return;
        } // don't do anything since not we control this
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.hide();
    };
    __decorate([
        core_1.Input('suprePopoverBody'), 
        __metadata('design:type', Object)
    ], PopoverDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input('suprePopoverPosition'), 
        __metadata('design:type', String)
    ], PopoverDirective.prototype, "popoverPlacement", void 0);
    __decorate([
        core_1.Input('suprePopoverHeader'), 
        __metadata('design:type', String)
    ], PopoverDirective.prototype, "popoverTitle", void 0);
    __decorate([
        core_1.Input('suprePopoverOnHover'), 
        __metadata('design:type', Boolean)
    ], PopoverDirective.prototype, "popoverOnHover", void 0);
    __decorate([
        core_1.Input('suprePopoverDisabled'), 
        __metadata('design:type', Boolean)
    ], PopoverDirective.prototype, "popoverDisabled", void 0);
    __decorate([
        core_1.Input('suprePopoverAnimated'), 
        __metadata('design:type', Boolean)
    ], PopoverDirective.prototype, "popoverAnimation", void 0);
    __decorate([
        core_1.Input('suprePopoverCloseOnClickOutside'), 
        __metadata('design:type', Boolean)
    ], PopoverDirective.prototype, "popoverCloseOnClickOutside", void 0);
    __decorate([
        core_1.Input('suprePopoverCloseOnMouseOutside'), 
        __metadata('design:type', Boolean)
    ], PopoverDirective.prototype, "popoverCloseOnMouseOutside", void 0);
    __decorate([
        core_1.Input('suprePopoverDismissTimeout'), 
        __metadata('design:type', Number)
    ], PopoverDirective.prototype, "popoverDismissTimeout", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PopoverDirective.prototype, "showOrHideOnClick", null);
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
}(Popover_1.Popover));
exports.PopoverDirective = PopoverDirective;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/src/popover.directive.js.map