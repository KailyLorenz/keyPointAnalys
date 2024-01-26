import {AfterContentInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {ActivatedRoute, IsActiveMatchOptions, ParamMap, Router} from "@angular/router";
import {Observable, share, Subscription} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'kpd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        overflow:'hidden',
        opacity:'1'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('750ms')),
      transition('final=>initial', animate('750ms'))
    ]),
  ]
})
export class HeaderComponent implements OnInit, OnDestroy, AfterContentInit {
  isActive: boolean = false;
  sub!: Subscription;
  subHeader: boolean = false;
  navbarCollapsedSub!: Subscription
  isNavbarCollapsed: boolean = false;
  activeFragment: any
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  @HostListener('document:scroll', ['$event']) pageScrolled(isActive: string){
    if (window.scrollY > 200) {
      this.isActive = true
    } else {
      this.isActive = false
    }
  }

  constructor(private utilsService: UtilsService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.activeFragment = this.route.fragment.pipe(share()).subscribe(d => {
      console.log('DATA', d)
    });
    this.sub = this.utilsService.subHeader.subscribe((value: boolean) => {
      this.subHeader = value
    })
    this.navbarCollapsedSub = this.utilsService.navbarCollapsed.subscribe((value: boolean) => {
      this.isNavbarCollapsed = value
    })
    // this.route.paramMap
    //   .subscribe((data) => {
    //     console.log('ParamMap', data)
        // if (!data) {
        //   console.log('WRONG')
        //   this.router.navigate(['/kpd'], {fragment: 'hero'});
        // }
      // });
  }
  @HostListener('window:scroll', ['$event']) scrollHandler(event: Event) {

    // console.log('this.activeFragment', this.activeFragment)
    // console.log('event', event.target)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    this.navbarCollapsedSub.unsubscribe()
  }

  ngAfterContentInit(): void {

    // console.log('isNavbarCollapsed', this.isNavbarCollapsed)
  }

}
