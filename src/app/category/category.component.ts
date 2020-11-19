import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { PhoneRequestComponent } from '../dialogs/phone-request/phone-request.component';
import { CATEGORIES } from './categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.scss' ]
})
export class CategoryComponent implements OnInit {
  categoryTitle = '';
  categoryIcon: IconName = 'dot-circle';
  subcategories: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    const category: string = this.activatedRoute.snapshot.routeConfig?.path || '';
    if (category) {
      this.categoryTitle = CATEGORIES[category].title;
      this.categoryIcon = CATEGORIES[category].icon;
      this.subcategories = CATEGORIES[category].subcategories;
    }
  }

  openDialog(category: string): void {
    this.dialog.open(PhoneRequestComponent, { data: { category } });
  }

}
