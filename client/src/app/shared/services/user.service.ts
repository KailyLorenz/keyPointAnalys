import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ContactMeInterface} from "../models/contactMe.interface";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class UserService{
  constructor(private http: HttpClient) {
  }

  sendContactMe(contactMe: ContactMeInterface): Observable<any> {
    return this.http.post<ContactMeInterface>('/api/v1/users/contactMe', contactMe)
  }
}
