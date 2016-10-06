import { Component, Input, AfterViewInit, ElementRef, ChangeDetectorRef,
         ViewChild} from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { PopoverPositionType } from './popover-position.type';

@Component({
  selector: 'supre-popover',
  template: require('./popover.component.html'),
  styles: [require('./popover.component.css')] // when developing use .scss
})
export class PopoverComponent implements AfterViewInit {

  // Properties

  public popover: PopoverDirective;
  public color: string = 'rgb(53,197,214)';
  public top: number = -1000;
  public left: number = -1000;
  public isIn: boolean = false;
  public displayType: string = 'none';

  public positionMap: Map<PopoverPositionType, string> = new Map([
    ['top' as PopoverPositionType, 'js-top js-popover top bs-tether-element-attached-bottom bs-tether-element-attached-center'],
    ['right' as PopoverPositionType, 'js-right js-popover right bs-tether-element-attached-middle bs-tether-element-attached-left'],
    ['bottom' as PopoverPositionType, 'js-bottom js-popover bottom bs-tether-element-attached-top bs-tether-element-attached-center'],
    ['left' as PopoverPositionType, 'js-left js-popover left bs-tether-element-attached-middle bs-tether-element-attached-right']
  ]);

  @ViewChild('popoverDiv')
  public popoverDiv: ElementRef;


  // Inputs / Outputs

  @Input()
  public body: string;

  @Input()
  public position: PopoverPositionType = 'bottom';

  @Input()
  public header: string;


  // Constructor

  constructor(private element: ElementRef,
              private cdr: ChangeDetectorRef) {
  }


  // Lifecycle Callbacks

  public ngAfterViewInit(): void {
    this.show();
    this.cdr.detectChanges();
  }


  // Public Methods

  public show(): void {
    if (!this.popover || !this.popover.getElement()) { return; }
    const p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.position);
    this.displayType = 'block';
    this.top = p.top;
    this.left = p.left;
    this.isIn = true;
  }

  public hide(): void {
    this.top = -1000;
    this.left = -1000;
    this.isIn = true;
    this.popover.hide();
  }

  public getPosition() {
    return this.positionMap.get(this.position);
  }

  public getPositionTitleCase() {
    return this.position.charAt(0).toUpperCase() + this.position.substring(1);
  }

  public getPopoverArrowStyles() {
    return {
      ['border' + this.getPositionTitleCase() + 'Color']: this.color
    };
  }


  // Private Methods
  // I really wish all these next methods were references to the upstream 
  // methods in ng2-popover, but cannot figure out how to make it so through
  // inheritance or composition, given their being private.
  // I'm still trying to figure out a way.

  private positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string,
                           appendToBody = false): { top: number, left: number } {
    let positionStrParts = positionStr.split('-');
    let pos0 = positionStrParts[0];
    let pos1 = positionStrParts[1] || 'center';
    let hostElPos = appendToBody ? this.offset(hostEl) : this.placement(hostEl);
    let targetElWidth = targetEl.offsetWidth;
    let targetElHeight = targetEl.offsetHeight;
    let shiftWidth: any = {
      center: function (): number {
        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
      },
      left: function (): number {
        return hostElPos.left;
      },
      right: function (): number {
        return hostElPos.left + hostElPos.width;
      }
    };

    let shiftHeight: any = {
      center: function (): number {
        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
      },
      top: function (): number {
        return hostElPos.top;
      },
      bottom: function (): number {
        return hostElPos.top + hostElPos.height;
      }
    };

    let targetElPos: { top: number, left: number };
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
  }

  private placement(nativeEl: HTMLElement): { width: number, height: number, top: number, left: number } {
    let offsetParentBCR = { top: 0, left: 0 };
    const elBCR = this.offset(nativeEl);
    const offsetParentEl = this.parentOffsetEl(nativeEl);
    if (offsetParentEl !== window.document) {
      offsetParentBCR = this.offset(offsetParentEl);
      offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
      offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
    }
    const boundingClientRect = nativeEl.getBoundingClientRect();
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: elBCR.top - offsetParentBCR.top,
      left: elBCR.left - offsetParentBCR.left
    };
  }

  private offset(nativeEl: any): { width: number, height: number, top: number, left: number } {
    const boundingClientRect = nativeEl.getBoundingClientRect();
    return {
      width: boundingClientRect.width || nativeEl.offsetWidth,
      height: boundingClientRect.height || nativeEl.offsetHeight,
      top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
      left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
    };
  }

  private getStyle(nativeEl: HTMLElement, cssProp: string): string {
    if ((nativeEl as any).currentStyle) { // IE
      return (nativeEl as any).currentStyle[cssProp];
    }
    if (window.getComputedStyle) {
      return (window.getComputedStyle as any)(nativeEl)[cssProp];
    }
    // finally try and get inline style
    return (nativeEl.style as any)[cssProp];
  }

  private isStaticPositioned(nativeEl: HTMLElement): boolean {
    return (this.getStyle(nativeEl, 'position') || 'static' ) === 'static';
  }

  private parentOffsetEl(nativeEl: HTMLElement): any {
    let offsetParent: any = nativeEl.offsetParent || window.document;
    while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || window.document;
  }

}
