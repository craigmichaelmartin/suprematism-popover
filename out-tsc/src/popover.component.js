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
var PopoverContent_1 = require('../node_modules/ng2-popover/src/PopoverContent');
var PopoverComponent = (function (_super) {
    __extends(PopoverComponent, _super);
    // Constructor
    function PopoverComponent(element, cdr) {
        _super.call(this, element, cdr);
        this.element = element;
        this.cdr = cdr;
        this.placement = 'bottom';
        this.animation = true;
        this.closeOnClickOutside = false;
        this.closeOnMouseOutside = false;
        this.color = 'rgb(53,197,214)';
        this.positionMap = new Map([
            ['top', 'js-top js-popover top bs-tether-element-attached-bottom bs-tether-element-attached-center'],
            ['right', 'js-right js-popover right bs-tether-element-attached-middle bs-tether-element-attached-left'],
            ['bottom', 'js-bottom js-popover bottom bs-tether-element-attached-top bs-tether-element-attached-center'],
            ['left', 'js-left js-popover left bs-tether-element-attached-middle bs-tether-element-attached-right']
        ]);
    }
    // Public Methods
    PopoverComponent.prototype.getPosition = function () {
        return this.positionMap.get(this.placement);
    };
    PopoverComponent.prototype.getPositionTitleCase = function () {
        return this.placement.charAt(0).toUpperCase() + this.placement.substring(1);
    };
    PopoverComponent.prototype.getPopoverArrowStyles = function () {
        return (_a = {},
            _a['border' + this.getPositionTitleCase() + 'Color'] = this.color,
            _a
        );
        var _a;
    };
    __decorate([
        core_1.Input('suprePopoverBody'), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input('suprePopoverPosition'), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "placement", void 0);
    __decorate([
        core_1.Input('suprePopoverHeader'), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('suprePopoverAnimated'), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input('suprePopoverCloseOnClickOutside'), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "closeOnClickOutside", void 0);
    __decorate([
        core_1.Input('suprePopoverCloseOnMouseOutside'), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "closeOnMouseOutside", void 0);
    __decorate([
        core_1.ViewChild('popoverDiv'), 
        __metadata('design:type', core_1.ElementRef)
    ], PopoverComponent.prototype, "popoverDiv", void 0);
    PopoverComponent = __decorate([
        core_1.Component({
            selector: 'supre-popover',
            template: require('./popover.component.html'),
            styles: [require('./popover.component.css')] // when developing use .scss
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], PopoverComponent);
    return PopoverComponent;
}(PopoverContent_1.PopoverContent));
exports.PopoverComponent = PopoverComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/src/popover.component.js.map