import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {ActivatedRoute} from "@angular/router";
import {Observable, share, Subscription} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";

@Component({
  selector: 'kpd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isActive: boolean = false;
  sub!: Subscription;
  subHeader: boolean = false;
  activeFragment: Observable<string | null> | undefined
  @HostListener('document:scroll', ['$event']) pageScrolled(isActive: string){
    if (window.scrollY > 200) {
      this.isActive = true
    } else {
      this.isActive = false
    }

  }

  constructor(private utilsService: UtilsService){}

  ngOnInit(): void {
    this.sub = this.utilsService.subHeader.subscribe((value: boolean) => {
      this.subHeader = value
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
