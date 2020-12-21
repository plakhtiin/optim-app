import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';
import { PHONE_PATTERN } from '../phone-request/phone-request.component';
import { MatDialogRef } from '@angular/material/dialog';


export interface FeedbackRequest {
  name: string;
  contactType: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: [ './feedback.component.scss' ],
})
export class FeedbackComponent implements OnInit {
  isLoad = false;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    contactType: new FormControl('email'),
    phone: new FormControl('', [ Validators.pattern(PHONE_PATTERN) ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    message: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    @Optional() private dialogRef: MatDialogRef<FeedbackComponent>,
  ) {
  }

  ngOnInit(): void {
    this.contactForm.controls.contactType.valueChanges.subscribe((type: 'email' | 'phone') => {
      if (type === 'email') {
        this.contactForm.controls.email.setValidators([ Validators.required, Validators.email ]);
        this.contactForm.controls.phone.clearValidators();
        this.contactForm.controls.phone.updateValueAndValidity();
      } else if (type === 'phone') {
        this.contactForm.controls.email.clearValidators();
        this.contactForm.controls.email.updateValueAndValidity();
        this.contactForm.controls.phone.setValidators([ Validators.required, Validators.pattern(PHONE_PATTERN) ]);
      }
    });
  }


  sendMessage(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.isLoad = true;
      this.apiService.sendFeedback(this.contactForm.value)
        .then(() => {
          this.contactForm.reset({
            contactType: 'email',
          });
          if (this.dialogRef) {
            this.dialogRef.close();
          }
        })
        .finally(() => this.isLoad = false);
    }
  }

}
