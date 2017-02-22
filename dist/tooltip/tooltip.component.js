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
import { Component, ElementRef, ChangeDetectorRef, Renderer, ViewEncapsulation } from '@angular/core';
import { AbstractPopoverComponent } from '../popover.abstract';
export var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    /**
     * Creates an instance of TooltipComponent.
     *
     * @param {ElementRef} element
     * @param {ChangeDetectorRef} cdr
     * @param {Renderer} renderer
     *
     * @memberOf TooltipComponent
     */
    function TooltipComponent(element, cdr, renderer) {
        _super.call(this, element, cdr, renderer);
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
    }
    TooltipComponent = __decorate([
        Component({
            selector: 'supre-tooltip',
            template: require('../popover.component.html'),
            styles: [require('../popover.css')],
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ElementRef, ChangeDetectorRef, Renderer])
    ], TooltipComponent);
    return TooltipComponent;
}(AbstractPopoverComponent));
//# sourceMappingURL=/Users/zacharyfantauzzi/workspace/suprematism-popover/src/tooltip/tooltip.component.js.map