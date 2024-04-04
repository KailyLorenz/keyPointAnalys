import { Component, OnInit } from '@angular/core';
import {IsActiveMatchOptions} from "@angular/router";

@Component({
  selector: 'kpd-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
