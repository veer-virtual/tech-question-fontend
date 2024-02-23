import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
//   private apiUrl = 'http://localhost:3000/api';
private apiUrl = 'http://3.110.122.52:3000/api';

  constructor(private http: HttpClient) {}

  uploadProgress = 0;

  getData() {
    return this.http.get(`${this.apiUrl}/getUploadedFiles`);
  }


  postData(formData: any) {
    this.uploadProgress = 0;
    return this.http
      .post(`${this.apiUrl}/upload`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(map((event) => this.getEventMessage(event)));
  }

  private getEventMessage(event: HttpEvent<any>) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return event.body;
      default:
        return `${event.type}.`;
    }
  }

  private fileUploadProgress(event: any) {
    const percentDone = Math.round((100 * event.loaded) / event.total);
    return { status: 'progress', percentage: percentDone };
  }
}
