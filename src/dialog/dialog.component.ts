import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  Renderer,
  ViewEncapsulation,
  AfterViewInit,
  Input
} from '@angular/core';
import { AbstractPopoverComponent } from '../popover.abstract';


@Component({
  selector: 'supre-inline-dialog',
  templateUrl: '../popover.component.html',
  styleUrls: ['../popover.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InlineDialogComponent extends AbstractPopoverComponent implements AfterViewInit {

  /** Inputs */
  @Input() placement = <'bottom'>'bottom';


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
   * LifeCycle Hook: After View Init
   *
   * Call the icon and description manager, this is only useful
   * when we are directly creating the component
   *
   *
   * @memberOf InlineDialogComponent
   */
  ngAfterViewInit() {
    this.parsePopup();
  }

}
