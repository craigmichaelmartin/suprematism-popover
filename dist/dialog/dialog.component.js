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
import { Component, ElementRef, ChangeDetectorRef, Renderer, ViewEncapsulation, Input } from '@angular/core';
import { AbstractPopoverComponent } from '../popover.abstract';
export var InlineDialogComponent = (function (_super) {
    __extends(InlineDialogComponent, _super);
    /**
     * Creates an instance of TooltipComponent.
     *
     * @param {ElementRef} element
     * @param {ChangeDetectorRef} cdr
     * @param {Renderer} renderer
     *
     * @memberOf TooltipComponent
     */
    function InlineDialogComponent(element, cdr, renderer) {
        _super.call(this, element, cdr, renderer);
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
        this.placement = 'bottom';
    }
    /**
     * LifeCycle Hook: After View Init
     *
     * Call the icon and description manager, this is only useful
     * when we are directly creating the component
     *
     *
     * @memberOf InlineDialogComponent
     */
    InlineDialogComponent.prototype.ngAfterViewInit = function () {
        this.parsePopup();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], InlineDialogComponent.prototype, "placement", void 0);
    InlineDialogComponent = __decorate([
        Component({
            selector: 'supre-inline-dialog',
            template: require('../popover.component.html'),
            styles: [require('../popover.css')],
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ElementRef, ChangeDetectorRef, Renderer])
    ], InlineDialogComponent);
    return InlineDialogComponent;
}(AbstractPopoverComponent));
//# sourceMappingURL=/Users/jacobstewart/src/suprematism-popover/src/dialog/dialog.component.js.map