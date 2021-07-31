import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError} from "rxjs";
import { catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManageLeadService {

  public apiUrl:string = "https://pixeltk.com/api/inquiry.php";

  constructor(private Http:HttpClient) { }

  getAllLeads() {
    return this.Http.get<any>(this.apiUrl)
  }
}
