import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kpd-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {

  thesis = [
    {'link': 'Id interdum velit laoreet id donec ultrices',
      'text': 'Feugiat pretium nibh ipsum consequat. \n' +
        '                  Tempus iaculis urna id volutpat lacus laoreet \n' +
        '                  non curabitur gravida. Venenatis lectus magna \n' +
        '                  fringilla urna porttitor rhoncus dolor purus non.'},
    {'link': 'Dolor sit amet consectetur adipiscing elit?',
      'text': 'Dolor sit amet consectetur adipiscing elit \n' +
        '                  pellentesque habitant morbi. Id interdum velit \n' +
        '                  laoreet id donec ultrices. Fringilla phasellus faucibus \n' +
        '                  scelerisque eleifend donec pretium. Est pellentesque elit \n' +
        '                  ullamcorper dignissim. Mauris ultrices eros in cursus \n' +
        '                  turpis massa tincidunt dui.'},
    {'link': 'Feugiat scelerisque varius morbi enim nunc?',
      'text': 'Eleifend mi in nulla posuere sollicitudin aliquam \n' +
        '                  ultrices sagittis orci. Faucibus pulvinar elementum \n' +
        '                  integer enim. Sem nulla pharetra diam sit amet nisl suscipit. \n' +
        '                  Rutrum tellus pellentesque eu tincidunt. Lectus urna duis \n' +
        '                  convallis convallis tellus. Urna molestie at elementum eu \n' +
        '                  facilisis sed odio morbi quis'},
  ]
  openAccordion: boolean[] = []

  toggleIcon(id: number) {
    this.openAccordion[id] = !this.openAccordion[id]
  }

  ngOnInit(): void {
    this.openAccordion[0] = !this.openAccordion[0]
  }
}
