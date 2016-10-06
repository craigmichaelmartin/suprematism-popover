import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverPositionType } from './popover-position.type';
export declare class PopoverDirective {
    private viewContainerRef;
    private resolver;
    private popover;
    private visible;
    body: string | PopoverComponent;
    position: PopoverPositionType;
    header: string;
    constructor(viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    showOnHover(): void;
    hideOnHover(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    getElement(): any;
}
