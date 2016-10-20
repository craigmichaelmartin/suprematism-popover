import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PopoverComponent } from './popover.component';
import { PopoverPositionType } from './popover-position.type';
import { Popover } from '../node_modules/ng2-popover/src/Popover';
export declare class PopoverDirective extends Popover {
    protected viewContainerRef: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    content: string | PopoverComponent;
    popoverPlacement: PopoverPositionType;
    popoverTitle: string;
    popoverOnHover: boolean;
    popoverDisabled: boolean;
    popoverAnimation: boolean;
    popoverCloseOnClickOutside: boolean;
    popoverCloseOnMouseOutside: boolean;
    popoverDismissTimeout: number;
    protected PopoverComponent: typeof PopoverComponent;
    constructor(viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    showOrHideOnClick(): void;
    showOnHover(): void;
    hideOnHover(): void;
}
