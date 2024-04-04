import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kpd-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {

  thesis = [
    {'link': 'Коммуникация и сотрудничество',
      'text': 'Люди и взаимодействия важнее процессов и инструментов, ' +
        'поэтому мы всегда готовы предоставить обратную связь нашим клиентам.'},
    {'link': 'Эффективность',
      'text': 'Работающий продукт важнее исчерпывающей документации. ' +
        'Мы заботимся о том, чтобы наши продукты решили Вашу проблему ' +
        'эффективно, прозрачно, достоверно, эргономично и быстро.'},
    {'link': 'Гибкость',
      'text': 'Условия внешней среды и бизнес-требования переменчивы, ' +
        'мы готовы вносить изменения, увязывая их с изменяющимися ' +
        'внутренними и внешними условиями.'},
  ]
  openAccordion: boolean[] = []

  toggleIcon(id: number) {
    this.openAccordion[id] = !this.openAccordion[id]
  }

  ngOnInit(): void {
    this.openAccordion[0] = !this.openAccordion[0]
  }
}
