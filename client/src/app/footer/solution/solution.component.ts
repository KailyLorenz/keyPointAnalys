import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'app-about-detail',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
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
