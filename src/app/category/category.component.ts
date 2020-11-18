import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { CATEGORIES } from './categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryTitle = '';
  categoryIcon: IconName = 'dot-circle';
  subcategories: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const category: string = this.activatedRoute.snapshot.routeConfig?.path || '';
    if (category) {
      this.categoryTitle = CATEGORIES[category].title;
      this.categoryIcon = CATEGORIES[category].icon;
      this.subcategories = CATEGORIES[category].subcategories;
    }
  }

}
