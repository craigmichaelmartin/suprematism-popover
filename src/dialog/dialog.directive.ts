import {
  Directive,
  Input,
  ComponentRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterViewInit
} from '@angular/core';
import { Popover } from 'ngx-popover';
import { InlineDialogComponent } from './dialog.component';


@Directive({
  selector: '[supreInlineDialog]',
  exportAs: 'supreInlineDialog'
})
export class InlineDialogDirective extends Popover {

  // Protected Members
  protected PopoverComponent = InlineDialogComponent;
  protected popover: ComponentRef<InlineDialogComponent>;
  protected visible: boolean;


  // Public Members
  // tslint:disable-next-line:no-input-rename
  @Input('supreInlineDialog') content: InlineDialogComponent;
  // tslint:disable-next-line:no-input-rename
  @Input('onHover') popoverOnHover = false;
  // tslint:disable-next-line:no-input-rename
  @Input('dialogDisabled') popoverDisabled = false;



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

}
