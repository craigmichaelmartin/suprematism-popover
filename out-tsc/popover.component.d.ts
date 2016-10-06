import { AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { PopoverPositionType } from './popover-position.type';
export declare class PopoverComponent implements AfterViewInit {
    private element;
    private cdr;
    popover: PopoverDirective;
    color: string;
    top: number;
    left: number;
    isIn: boolean;
    displayType: string;
    positionMap: Map<PopoverPositionType, string>;
    popoverDiv: ElementRef;
    body: string;
    position: PopoverPositionType;
    header: string;
    constructor(element: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    show(): void;
    hide(): void;
    getPosition(): string;
    getPositionTitleCase(): string;
    getPopoverArrowStyles(): {
        [x: string]: string;
    };
    private positionElements(hostEl, targetEl, positionStr, appendToBody?);
    private placement(nativeEl);
    private offset(nativeEl);
    private getStyle(nativeEl, cssProp);
    private isStaticPositioned(nativeEl);
    private parentOffsetEl(nativeEl);
}
