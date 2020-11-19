import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackRequest } from './dialogs/feedback/feedback.component';
import { PhoneRequest } from './dialogs/phone-request/phone-request.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  sendPhoneRequest(action: PhoneRequest): Observable<any> {
    return this.http.post(`/api/phone`, action);
  }

  sendFeedback(action: FeedbackRequest): Observable<any> {
    return this.http.post(`/api/feedback`, action);
  }
}
