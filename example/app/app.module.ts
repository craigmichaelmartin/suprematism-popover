import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SuprePopoverModule } from '../../src/supre-popover.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SuprePopoverModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
