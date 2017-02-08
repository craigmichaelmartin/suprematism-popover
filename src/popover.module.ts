import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { InlineDialogComponent } from './dialog/dialog.component';
import { InlineDialogDirective } from './dialog/dialog.directive';
import { Popover, PopoverContent } from 'ngx-popover';


@NgModule({
  declarations: [
    Popover,
    PopoverContent,
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
    BrowserModule
  ],
  providers: [],
  entryComponents: [TooltipComponent],
  bootstrap: []
})
export class PopoverModule { }
