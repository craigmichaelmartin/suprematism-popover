import { Directive, HostListener, ComponentRef, ViewContainerRef,
         ComponentFactoryResolver, Input } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverPositionType } from './popover-position.type';

@Directive({
  selector: '[suprePopoverBody]',
  exportAs: 'suprePopoverBody'
})
export class PopoverDirective {

  // Properties

  private popover: ComponentRef<PopoverComponent>;
  private visible: boolean;


  // Inputs / Outputs

  @Input('suprePopoverBody')
  public body: string|PopoverComponent;

  @Input('suprePopoverPosition')
  public position: PopoverPositionType;

  @Input('suprePopoverHeader')
  public header: string;


  // Constructor

  constructor(private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver) {
  }


  // Event listeners

  @HostListener('focusin')
  @HostListener('mouseenter')
  public showOnHover(): void {
    this.show();
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  public hideOnHover(): void {
    this.hide();
  }


  // Public Methods

  public toggle(): void {
    if (!this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }

  public show(): void {
    if (this.visible) { return; }
    this.visible = true;
    const factory = this.resolver.resolveComponentFactory(PopoverComponent);

    this.popover = this.viewContainerRef.createComponent(factory);
    const popover = this.popover.instance as PopoverComponent;
    popover.popover = this;
    popover.body = this.body as string;
    if (this.position !== undefined) {
      popover.position = this.position;
    }
    if (this.header !== undefined) {
      popover.header = this.header;
    }
  }

  public hide(): void {
    if (!this.visible) { return; }
    this.visible = false;
    this.popover.destroy();
  }

  public getElement() {
    return this.viewContainerRef.element.nativeElement;
  }

}
