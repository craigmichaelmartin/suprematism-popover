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
import { Input } from '@angular/core';
import { PopoverContent } from 'ngx-popover';
export var AbstractPopoverComponent = (function (_super) {
    __extends(AbstractPopoverComponent, _super);
    /**
     * Creates an instance of TooltipComponent.
     *
     * @param {ElementRef} element
     * @param {ChangeDetectorRef} cdr
     * @param {Renderer} renderer
     *
     * @memberOf TooltipComponent
     */
    function AbstractPopoverComponent(element, cdr, renderer) {
        _super.call(this, element, cdr, renderer);
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
        // public
        this.icon = null;
        this.iconBase = 'u-supre-icon';
    }
    /**
     * Adds additional behavior for showing the component
     *
     * Also is bound to the component's clieck event
     * The click event is only applicable when this is used as a component
     * the event does not fire when called form the directive, we manually
     * call this method fro the directive
     *
     * @memberOf TooltipComponent
     */
    AbstractPopoverComponent.prototype.parsePopup = function () {
        this.removedescriptionTest();
        this.appendIcon();
    };
    /**
     * Check to see if the description is empty
     *
     * @private
     *
     * @memberOf TooltipComponent
     */
    AbstractPopoverComponent.prototype.removedescriptionTest = function () {
        var el = this.element.nativeElement.querySelector('.popover-content');
        if (!Array.from(el.childNodes).some(function (_el) { return _el['length'] > 0; }) && !this.content) {
            el.parentNode.removeChild(el);
        }
    };
    /**
     * Append an Icon, if there is one
     *
     * @private
     *
     * @memberOf TooltipComponent
     */
    AbstractPopoverComponent.prototype.appendIcon = function () {
        var popoverTitle = this.element.nativeElement.querySelector('.popover-title');
        if (this.icon !== null && this.icon.length > 0 && popoverTitle.querySelector('.dynamic-icon') === null) {
            var icon = document.createElement('span'), el = popoverTitle.childNodes[0];
            icon.className += "dynamic-icon " + this.iconBase + " " + this.icon + " _mrs ";
            popoverTitle.insertBefore(icon, el);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], AbstractPopoverComponent.prototype, "icon", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], AbstractPopoverComponent.prototype, "iconBase", void 0);
    return AbstractPopoverComponent;
}(PopoverContent));
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/popover.abstract.js.map