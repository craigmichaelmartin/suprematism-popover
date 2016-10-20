import { AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PopoverPositionType } from './popover-position.type';
import { PopoverDirective } from './popover.directive';
import { PopoverContent } from '../node_modules/ng2-popover/src/PopoverContent';
export declare class PopoverComponent extends PopoverContent implements AfterViewInit, OnDestroy {
    protected element: ElementRef;
    protected cdr: ChangeDetectorRef;
    content: string;
    placement: PopoverPositionType;
    title: string;
    animation: boolean;
    closeOnClickOutside: boolean;
    closeOnMouseOutside: boolean;
    popoverDiv: ElementRef;
    popover: PopoverDirective;
    color: string;
    positionMap: Map<PopoverPositionType, string>;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    getPosition(): string;
    getPositionTitleCase(): string;
    getPopoverArrowStyles(): {
        [x: string]: string;
    };
}
