import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackRequest } from './dialogs/feedback/feedback.component';
import { PhoneRequest } from './dialogs/phone-request/phone-request.component';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  sendPhoneRequest(action: PhoneRequest): Promise<any> {
    return API.post('optimAPI', '/api/phone', {
      headers: { 'Content-Type': 'application/json' },
      body: action,
    });
    // return this.http.post(`/api/phone`, action);
  }

  sendFeedback(action: FeedbackRequest): Promise<any> {
    return API.post('optimAPI', '/api/feedback', {
      headers: { 'Content-Type': 'application/json' },
      body: action,
    });
    // return this.http.post(`/api/feedback`, action);
  }
}
