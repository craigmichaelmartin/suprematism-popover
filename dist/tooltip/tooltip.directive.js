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
import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Popover } from 'ngx-popover';
import { TooltipComponent } from './tooltip.component';
export var TooltipDirective = (function (_super) {
    __extends(TooltipDirective, _super);
    /**
     * Creates an instance of TooltipDirective.
     *
     * @param {ViewContainerRef} viewContainerRef
     * @param {ComponentFactoryResolver} resolver
     *
     * @memberOf TooltipDirective
     */
    function TooltipDirective(viewContainerRef, resolver) {
        _super.call(this, viewContainerRef, resolver);
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        // Protected Members
        this.PopoverComponent = TooltipComponent;
        // Public Members
        // NOTE: see original directive for all inputs
        this.content = '';
        this.popoverPlacement = 'auto top';
        this.popoverOnHover = true;
        this.icon = null;
        this.iconBase = 'u-supre-icon';
    }
    /**
     * Hook: AfterViewInit
     *
     *
     * @memberOf TooltipDirective
     */
    TooltipDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // subscribe to the onShown eventEmitter and set the additional props on the component
        this.onShown
            .subscribe(function () {
            if (_this.icon) {
                _this.popover.instance.icon = _this.iconBase + " " + _this.icon;
            }
            _this.popover.instance.parsePopup();
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "popoverPlacement", void 0);
    __decorate([
        Input('supreTooltip'), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "popoverTitle", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "popoverOnHover", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TooltipDirective.prototype, "icon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "iconBase", void 0);
    TooltipDirective = __decorate([
        Directive({
            selector: '[supreTooltip]',
            exportAs: 'supreTooltip'
        }), 
        __metadata('design:paramtypes', [ViewContainerRef, ComponentFactoryResolver])
    ], TooltipDirective);
    return TooltipDirective;
}(Popover));
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/tooltip/tooltip.directive.js.map