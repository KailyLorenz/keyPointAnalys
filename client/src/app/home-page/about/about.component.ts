import {Component, OnDestroy, OnInit} from '@angular/core';
import {Params} from "@angular/router";
import {Subscription} from "rxjs";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'kpd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  sub!: Subscription
  constructor() { }

  ngOnInit(): void {

    // this.route.params.subscribe((params: Params) => {
    //   this.utilsService.setSubHeader(true)
    // })
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe()
  }

}
