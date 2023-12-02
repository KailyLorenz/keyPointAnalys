import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ContactNeInterface} from "../models/contactNe.interface";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class UserService{
  constructor(private http: HttpClient) {
  }

  sendContactMe(contactMe: ContactNeInterface): Observable<any> {
    return this.http.post<ContactNeInterface>('/api/v1/users/contactMe', contactMe)
  }
}
