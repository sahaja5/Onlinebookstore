import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiservService {
  constructor(private _http:HttpClient) { }
  getAllBooks(){
    return  this._http.get<any>("http://localhost:8876/getBook");
   }
   private baseUrl="http://localhost:8888/deleteBook";
   deleteuserserv(id:number): Observable<any>{
    return  this._http.delete<any>("http://localhost:8876/deleteBook/"+`${id}`);
   }
}
