import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FeedbackComponent } from './dialogs/feedback/feedback.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog(): void {
    this.dialog.open(FeedbackComponent);
  }
}
