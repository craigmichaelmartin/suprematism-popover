import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  Renderer,
  ViewEncapsulation
} from '@angular/core';
import { AbstractPopoverComponent } from '../popover.abstract';

@Component({
  selector: 'supre-tooltip',
  template: require('../popover.component.html'),
  styles: [require('../popover.scss')],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent extends AbstractPopoverComponent {

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

}
