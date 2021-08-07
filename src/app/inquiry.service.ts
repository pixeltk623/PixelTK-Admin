import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  private baseUrl:string = "https://localhost/PixelTK_API/inquiry.php";
  constructor(private http:HttpClient) { }

  getAllInquiry() {
    return this.http.get(this.baseUrl);
  }

}
