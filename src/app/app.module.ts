import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  IconDefinition,
  faPhoneAlt,
  faMailBulk,
  faPhoneSquareAlt,
  faMapMarkedAlt,
  faAward,
  faUserTie,
  faReceipt,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { MainComponent } from './main/main.component';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';

const icons: IconDefinition[] = [
  faPhoneAlt,
  faEnvelope,
  faMailBulk,
  faPhoneSquareAlt,
  faMapMarkedAlt,
  faFacebookSquare,
  faAward,
  faUserTie,
  faReceipt,
  faFileInvoice,
];
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(...icons);
  }
}
