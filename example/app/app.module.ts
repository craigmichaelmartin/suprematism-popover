import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { PopoverDirective } from '../../src/popover.directive';
import { PopoverModule } from '../../src/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
