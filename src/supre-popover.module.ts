import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { InlineDialogComponent } from './dialog/dialog.component';
import { InlineDialogDirective } from './dialog/dialog.directive';
// import { Popover, PopoverContent } from 'ngx-popover';


@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent,
    InlineDialogComponent,
    InlineDialogDirective
  ],
  exports: [
    TooltipDirective,
    InlineDialogComponent,
    InlineDialogDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  entryComponents: [TooltipComponent],
  bootstrap: []
})
export class SuprePopoverModule { }
