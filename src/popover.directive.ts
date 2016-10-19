import { Directive, Input, HostListener, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverPositionType } from './popover-position.type';
import { Popover } from '../node_modules/ng2-popover/src/Popover';

@Directive({
  selector: '[suprePopoverBody]',
  exportAs: 'suprePopoverBody'
})
export class PopoverDirective extends Popover {

  // Inputs / Outputs 

  @Input('suprePopoverBody')
  content: string|PopoverComponent;

  @Input('suprePopoverPosition')
  popoverPlacement: PopoverPositionType;

  @Input('suprePopoverHeader')
  popoverTitle: string;

  @Input('suprePopoverOnHover')
  popoverOnHover: boolean = true;

  @Input('suprePopoverDisabled')
  popoverDisabled: boolean = false;

  @Input('suprePopoverAnimated')
  popoverAnimation: boolean = false;

  @Input('suprePopoverCloseOnClickOutside')
  popoverCloseOnClickOutside: boolean;

  @Input('suprePopoverCloseOnMouseOutside')
  popoverCloseOnMouseOutside: boolean;

  @Input('suprePopoverDismissTimeout')
  popoverDismissTimeout: number = 0;


  // Properties

  protected PopoverComponent = PopoverComponent;


  // Constructor

  constructor(protected viewContainerRef: ViewContainerRef,
              protected resolver: ComponentFactoryResolver) {
    super(viewContainerRef, resolver);
  }


  // Event listeners

  @HostListener('click')
  showOrHideOnClick(): void {
    if (this.popoverOnHover) { return; }
    if (this.popoverDisabled) { return; }
    this.toggle();
  }

  @HostListener('focusin')
  @HostListener('mouseenter')
  showOnHover(): void {
    if (!this.popoverOnHover) { return; }
    if (this.popoverDisabled) { return; }
    this.show();
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  hideOnHover(): void {
      if (this.popoverCloseOnMouseOutside) { return; } // don't do anything since not we control this
      if (!this.popoverOnHover) { return; }
      if (this.popoverDisabled) { return; }
      this.hide();
  }

}
