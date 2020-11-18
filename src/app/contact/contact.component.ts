import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const PHONE_PATTERN = '^((\\+972-?\\s*)|0\\s*)?(\\d\\s*-?){8}\\d$';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contactType: new FormControl('email'),
    phone: new FormControl('', [Validators.pattern(PHONE_PATTERN)]),
    email: new FormControl('', [Validators.email]),
    message: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this);
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

  }

}
