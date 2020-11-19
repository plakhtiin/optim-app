import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';
import { PHONE_PATTERN } from '../phone-request/phone-request.component';


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
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactType: new FormControl('email'),
    phone: new FormControl('', [Validators.pattern(PHONE_PATTERN)]),
    email: new FormControl('', [Validators.email]),
    message: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.contactForm.controls.contactType.valueChanges.subscribe((type: 'email' | 'phone') => {
      if (type === 'email') {
        this.contactForm.controls.email.setValidators([Validators.required, Validators.email]);
        this.contactForm.controls.phone.setValidators([]);
      } else if (type === 'phone') {
        this.contactForm.controls.email.setValidators([]);
        this.contactForm.controls.phone.setValidators([Validators.required, Validators.pattern(PHONE_PATTERN)]);
      }
    });
  }


  sendMessage(): void {
    if (this.contactForm.valid) {
      this.apiService.sendFeedback(this.contactForm.value).subscribe();
    }
  }

}
