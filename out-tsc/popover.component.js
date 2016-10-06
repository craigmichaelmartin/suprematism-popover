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
var PopoverComponent = (function () {
    // Constructor
    function PopoverComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.color = 'rgb(53,197,214)';
        this.top = -1000;
        this.left = -1000;
        this.isIn = false;
        this.displayType = 'none';
        this.positionMap = new Map([
            ['top', 'js-top js-popover top bs-tether-element-attached-bottom bs-tether-element-attached-center'],
            ['right', 'js-right js-popover right bs-tether-element-attached-middle bs-tether-element-attached-left'],
            ['bottom', 'js-bottom js-popover bottom bs-tether-element-attached-top bs-tether-element-attached-center'],
            ['left', 'js-left js-popover left bs-tether-element-attached-middle bs-tether-element-attached-right']
        ]);
        this.position = 'bottom';
    }
    // Lifecycle Callbacks
    PopoverComponent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    // Public Methods
    PopoverComponent.prototype.show = function () {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.position);
        this.displayType = 'block';
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
    };
    PopoverComponent.prototype.hide = function () {
        this.top = -1000;
        this.left = -1000;
        this.isIn = true;
        this.popover.hide();
    };
    PopoverComponent.prototype.getPosition = function () {
        return this.positionMap.get(this.position);
    };
    PopoverComponent.prototype.getPositionTitleCase = function () {
        return this.position.charAt(0).toUpperCase() + this.position.substring(1);
    };
    PopoverComponent.prototype.getPopoverArrowStyles = function () {
        return (_a = {},
            _a['border' + this.getPositionTitleCase() + 'Color'] = this.color,
            _a
        );
        var _a;
    };
    // Private Methods
    // I really wish all these next methods were references to the upstream 
    // methods in ng2-popover, but cannot figure out how to make it so through
    // inheritance or composition, given their being private.
    // I'm still trying to figure out a way.
    PopoverComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.placement(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    PopoverComponent.prototype.placement = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PopoverComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    PopoverComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) {
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    PopoverComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PopoverComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    __decorate([
        core_1.ViewChild('popoverDiv'), 
        __metadata('design:type', core_1.ElementRef)
    ], PopoverComponent.prototype, "popoverDiv", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "body", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PopoverComponent.prototype, "header", void 0);
    PopoverComponent = __decorate([
        core_1.Component({
            selector: 'supre-popover',
            template: require('./popover.component.html'),
            styles: [require('./popover.component.css')] // when developing use .scss
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], PopoverComponent);
    return PopoverComponent;
}());
exports.PopoverComponent = PopoverComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-popover/src/popover.component.js.map