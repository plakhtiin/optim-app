import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FeedbackComponent } from './dialogs/feedback/feedback.component';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  isMobile = false;
  isTablet = false;
  @ViewChild('menu') menu: MatMenu | undefined;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => (this.isTablet = result.matches));
    breakpointObserver.observe(['(max-width: 576px)']).subscribe(result => (this.isMobile = result.matches));
  }

  openDialog(): void {
    this.dialog.open(FeedbackComponent);
  }
}
