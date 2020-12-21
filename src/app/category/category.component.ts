import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { PhoneRequestComponent } from '../dialogs/phone-request/phone-request.component';
import { CATEGORIES } from './categories';
import Analytics from '@aws-amplify/analytics';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.scss' ]
})
export class CategoryComponent implements OnInit {
  categoryTitle = '';
  categoryIcon = '';
  subcategories: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    const category: string = this.activatedRoute.snapshot.routeConfig?.path || '';
    if (category) {
      if (environment.production) {
        Analytics.record({
          name: 'visitCategory',
          attributes: {
            category: category
          }
        });
      }
      this.categoryTitle = CATEGORIES[category].title;
      this.categoryIcon = CATEGORIES[category].icon;
      this.subcategories = CATEGORIES[category].subcategories;
    }
  }

  openDialog(category: string): void {
    this.dialog.open(PhoneRequestComponent, { data: { category } });
  }

}
