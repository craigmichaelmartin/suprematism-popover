import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [TooltipComponent],
  bootstrap: []
})
export class PopoverModule { }
