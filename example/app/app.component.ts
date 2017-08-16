import { Component } from '@angular/core';
import { InlineDialogComponent } from '../../src/dialog/dialog.component';

@Component({
  selector: 'supre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDisabled = false;

  public toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
