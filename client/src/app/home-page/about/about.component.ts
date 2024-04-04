import {Component} from '@angular/core';

@Component({
  selector: 'kpd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  theses = [
    'Визуализированная информация на дашбордах',
    'Читабельные и просто-интерпретируемые отчеты',
    'Оптимизация рабочего времени, путем автоматизации ручных операций',
    'Своевременное поступления информации и ее автообновление',
  ]
}
