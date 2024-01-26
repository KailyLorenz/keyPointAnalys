import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class UtilsService{
  // scrollY = new BehaviorSubject(0);
  // scrollY$ = this.scrollY.asObservable();
  subHeader = new Subject<boolean>()
  navbarCollapsed = new Subject<boolean>()

  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Easy selector helper function
   */
  select(element: string, all = false) {
    element = element.trim()
    if (all) {
      console.log(all)
      console.log(this.document.querySelectorAll(element))
      return this.document.querySelectorAll(element)
    } else {
      console.log(this.document.querySelectorAll(element))
      return this.document.querySelectorAll(element)
    }
  }
  // updateScrollY(value: number): void {
  //   this.scrollY.next(value);
  // }
  setSubHeader(value: boolean): void {
    this.subHeader.next(value)
  }

  setNavbarCollapsed(value: boolean): void {
    this.navbarCollapsed.next(value)
    console.log('UtilsService')
  }
}
