import {
  Directive,
  Input,
  ComponentRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterViewInit
} from '@angular/core';
import { Popover } from 'ngx-popover';
import { TooltipComponent } from './tooltip.component';


@Directive({
  selector: '[supreTooltip]',
  exportAs: 'supreTooltip'
})
export class TooltipDirective extends Popover implements AfterViewInit {

  // Protected Members
  protected PopoverComponent = TooltipComponent;
  protected popover: ComponentRef<TooltipComponent>;
  protected visible: boolean;


  // Public Members
  @Input() content: string | TooltipComponent = '';
  @Input() popoverPlacement: 'top'|'bottom'|'left'|'right'|'auto'|'auto top'|'auto bottom'|'auto left'|'auto right' = 'auto top';
  // tslint:disable-next-line:no-input-rename
  @Input('supreTooltip') popoverTitle: string;
  @Input() popoverOnHover = true;
  // tslint:disable-next-line:no-input-rename
  @Input('disabled') popoverDisabled = false;
  @Input() icon: string = null;
  @Input() iconBase = 'u-supre-icon';


  /**
   * Creates an instance of TooltipDirective.
   *
   * @param {ViewContainerRef} viewContainerRef
   * @param {ComponentFactoryResolver} resolver
   *
   * @memberOf TooltipDirective
   */
  constructor(
    protected viewContainerRef: ViewContainerRef,
    protected resolver: ComponentFactoryResolver
  ) {
    super(viewContainerRef, resolver);
  }


  /**
   * Hook: AfterViewInit
   *
   *
   * @memberOf TooltipDirective
   */
  ngAfterViewInit() {
    // subscribe to the onShown eventEmitter and set the additional props on the component
    this.onShown
      .subscribe(() => {
        if (this.icon) {
          this.popover.instance.icon = `${this.iconBase} ${this.icon}`;
        }
        this.popover.instance.parsePopup();
      });
  }

}
