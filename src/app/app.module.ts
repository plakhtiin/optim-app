import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
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
  faEnvelopeOpenText,
  faFileAlt,
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

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
  faEnvelopeOpenText,
  faFileAlt,
];
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
