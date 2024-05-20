import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UtilsService} from "../../../shared/services/utils.service";

@Component({
  selector: 'app-about-detail',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  type!: string

  constructor(private utilsService: UtilsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.utilsService.setSubHeader(true)
    this.route.params.subscribe(params => {
      this.type = params['type']
      console.log('type', this.type)
    })
  }
}
