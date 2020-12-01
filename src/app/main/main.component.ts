import { Component, OnInit } from '@angular/core';

import { MAIN_CATEGORIES, MainCategories } from './main-categories';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  categories: MainCategories[] = MAIN_CATEGORIES;
  constructor() { }

  ngOnInit(): void {
  }

}
