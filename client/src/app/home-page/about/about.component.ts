import {Component} from '@angular/core';

@Component({
  selector: 'kpd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  theses = [
    'Избавим от рутиных действий',
    'Оптимизируем рабочее время путем автоматизации ручных операций',
    'Создадим читабельные, понятные и просто-интерпретируемые отчеты',
    'Визуализируем информацию на дашбордах',
    'Обеспечим своевременность поступления информации и ее автообновление',
  ]
}
