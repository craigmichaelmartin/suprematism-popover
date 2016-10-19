import { Component, AfterViewInit, Input, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PopoverPositionType } from './popover-position.type';
import { PopoverDirective } from './popover.directive';
import { PopoverContent } from '../node_modules/ng2-popover/src/PopoverContent';

@Component({
  selector: 'supre-popover',
  template: require('./popover.component.html'),
  styles: [require('./popover.component.css')] // when developing use .scss
})
export class PopoverComponent extends PopoverContent implements AfterViewInit, OnDestroy {

  // Inputs / Outputs 

  @Input('suprePopoverBody')
  content: string;

  @Input('suprePopoverPosition')
  placement: PopoverPositionType = 'bottom';

  @Input('suprePopoverHeader')
  title: string;

  @Input('suprePopoverAnimated')
  animation: boolean = true;

  @Input('suprePopoverCloseOnClickOutside')
  closeOnClickOutside: boolean = false;

  @Input('suprePopoverCloseOnMouseOutside')
  closeOnMouseOutside: boolean = false;


  // Properties

  @ViewChild('popoverDiv')
  popoverDiv: ElementRef;

  popover: PopoverDirective;

  color: string = 'rgb(53,197,214)';

  positionMap: Map<PopoverPositionType, string> = new Map([
    ['top' as PopoverPositionType, 'js-top js-popover top bs-tether-element-attached-bottom bs-tether-element-attached-center'],
    ['right' as PopoverPositionType, 'js-right js-popover right bs-tether-element-attached-middle bs-tether-element-attached-left'],
    ['bottom' as PopoverPositionType, 'js-bottom js-popover bottom bs-tether-element-attached-top bs-tether-element-attached-center'],
    ['left' as PopoverPositionType, 'js-left js-popover left bs-tether-element-attached-middle bs-tether-element-attached-right']
  ]);


  // Constructor

  constructor(protected element: ElementRef,
              protected cdr: ChangeDetectorRef) {
    super(element, cdr);
  }


  // Public Methods

  getPosition() {
    return this.positionMap.get(this.placement);
  }

  getPositionTitleCase() {
    return this.placement.charAt(0).toUpperCase() + this.placement.substring(1);
  }

  getPopoverArrowStyles() {
    return {
      ['border' + this.getPositionTitleCase() + 'Color']: this.color
    };
  }

}
