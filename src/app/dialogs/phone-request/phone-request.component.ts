import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../../api.service';

export interface PhoneRequest {
  phone: string;
  category: string;
}

export interface DialogData {
  category: string;
}

export const PHONE_PATTERN = '^((\\+972-?\\s*)|0\\s*)?(\\d\\s*-?){8}\\d$';

@Component({
  selector: 'app-phone-request',
  templateUrl: './phone-request.component.html',
  styleUrls: ['./phone-request.component.scss']
})
export class PhoneRequestComponent implements OnInit {
  phoneFormControl: FormControl = new FormControl('', [Validators.pattern(PHONE_PATTERN)]);

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<PhoneRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  sendPhoneRequest(): void {
    if (this.phoneFormControl.value && this.phoneFormControl.valid) {
      this.apiService.sendPhoneRequest({
        phone: this.phoneFormControl.value,
        category: this.data.category,
      }).subscribe(_ => {
        this.dialogRef.close();
      });
    }
  }

}
