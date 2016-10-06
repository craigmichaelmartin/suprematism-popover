import { CommonModule } from '@angular/common';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';
import { NgModule } from '@angular/core';

export * from './popover.directive';
export * from './popover.component';
export * from './popover-position.type';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PopoverComponent,
        PopoverDirective,
    ],
    exports: [
        PopoverComponent,
        PopoverDirective,
    ],
    entryComponents: [
        PopoverComponent
    ]
})
export class PopoverModule {

}
