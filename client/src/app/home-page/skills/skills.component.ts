import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";
import {DOCUMENT} from "@angular/common";
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";
declare const Waypoint: any;

@Component({
  selector: 'kpd-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('divStyle', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))

    ]),
    trigger('wildState', [
      state('normal', style({
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        transform: 'translateX(100px)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),

      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ] ),
      // delete
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ] )

    ]),
    //KeyFrames
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),

      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.9
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          }),
        ]))
      ]),
      // delete
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          })),
        ])
      ] )
    ]),
  ]
})
export class SkillsComponent implements OnInit, AfterViewInit {

  @ViewChild('skillsSection') skillsSection: ElementRef|undefined;

  // @ViewChildren('progress', {read: true}) progress: QueryList<ElementRef> | undefined;
  skills = [
    {name: 'Javascript', percent: 90},
    {name: 'TypeScript', percent: 80},
    {name: 'Java', percent: 25},
    {name: 'Photoshop', percent: 50},
  ]

  constructor(private utilsService: UtilsService, private elementRef: ElementRef,
              @Inject(DOCUMENT) private document: Document) {
  }


  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    let progressList = this.utilsService.select('.progress .progress-bar', true);
    new Waypoint({
        element: this.skillsSection?.nativeElement,
        handler: function (direction: any) {
                progressList?.forEach((el: any) => {
                  el.style.width = el.getAttribute('aria-valuenow') + '%'
                });
        }
      }
    )
  }
  // state = 'normal'
  // wildState = 'normal'
  // onAnimate() {
  //   this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  //   this.wildState == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  // }
  // onShrink() {
  //   this.wildState = 'shrunken'
  // }
}
