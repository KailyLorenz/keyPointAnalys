import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../shared/services/utils.service";

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.setSubHeader(true)
  }
}
