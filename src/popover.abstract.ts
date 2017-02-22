import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  Renderer,
  ViewEncapsulation,
  Input,
  HostListener
} from '@angular/core';
import { PopoverContent } from 'ngx-popover';


export abstract class AbstractPopoverComponent extends PopoverContent {

  // public
  @Input() public icon = null;
  @Input() public iconBase = 'u-supre-icon';
  // tslint:disable-next-line:no-input-rename
  @Input('disabled') popoverDisabled = false;


  /**
   * Creates an instance of TooltipComponent.
   *
   * @param {ElementRef} element
   * @param {ChangeDetectorRef} cdr
   * @param {Renderer} renderer
   *
   * @memberOf TooltipComponent
   */
  constructor(
    protected element: ElementRef,
    protected cdr: ChangeDetectorRef,
    protected renderer: Renderer
  ) {
    super(element, cdr, renderer);
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
  public parsePopup() {
    this.removedescriptionTest();
    this.appendIcon();
  }


  /**
   * Check to see if the description is empty
   *
   * @private
   *
   * @memberOf TooltipComponent
   */
  private removedescriptionTest() {
    const el = this.element.nativeElement.querySelector('.popover-content');
    if (!Array.from(el.childNodes).some(_el => _el['length'] > 0) && !this.content) {
      el.parentNode.removeChild(el);
    }
  }


  /**
   * Append an Icon, if there is one
   *
   * @private
   *
   * @memberOf TooltipComponent
   */
  private appendIcon() {
    const popoverTitle = this.element.nativeElement.querySelector('.popover-title');
    if (this.icon !== null && this.icon.length > 0 && popoverTitle.querySelector('.dynamic-icon') === null) {
      const icon = document.createElement('span'),
            el = popoverTitle.childNodes[0];
      icon.className += `dynamic-icon ${this.iconBase} ${this.icon} _mrs `;
      popoverTitle.insertBefore(icon, el);
    }
  }

}
