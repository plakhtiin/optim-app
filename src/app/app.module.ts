import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faAward,
  faEnvelopeOpenText,
  faFileAlt,
  faFileInvoice,
  faMailBulk,
  faMapMarkedAlt,
  faPhoneAlt,
  faPhoneSquareAlt,
  faPortrait,
  faReceipt,
  faUserFriends,
  faUserTie,
  faWallet,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  faWallet,
  faPortrait,
  faUserFriends,
  faDotCircle,
];
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatListModule,
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
