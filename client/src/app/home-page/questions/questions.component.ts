import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kpd-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [
    { 'question': 'Соглашение о конфиденциальности (NDA)',
      'answer': 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id \n' +
        '              volutpat lacus laoreet non curabitur gravida. \n' +
        '              Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'},
    { 'question': 'Интервью с Вами (1-2 часа) ',
      'answer': 'Аудит вашего управленческого учета, определение KPI для анализа и источников хранения данных'},
    { 'question': 'Создание ТЗ и его защита перед Заказчиком',
      'answer': 'Eleifend mi in nulla posuere sollicitudin aliquam \n' +
        '              ultrices sagittis orci. Faucibus pulvinar elementum \n' +
        '              integer enim. Sem nulla pharetra diam sit amet nisl \n' +
        '              suscipit. Rutrum tellus pellentesque eu tincidunt. \n' +
        '              Lectus urna duis convallis convallis tellus. Urna \n' +
        '              molestie at elementum eu facilisis sed odio morbi quis'},
    { 'question': 'Разработка решение (проекта',
      'answer': 'Molestie a iaculis at erat pellentesque adipiscing commodo. \n' +
        '              Dignissim suspendisse in est ante in. Nunc vel risus commodo \n' +
        '              viverra maecenas accumsan. Sit amet nisl suscipit adipiscing \n' +
        '              bibendum est. Purus gravida quis blandit turpis cursus in.'},
    {
      'question': 'Внедрение и передача Заказчику. Обучение сотрудников',
      'answer': 'Laoreet sit amet cursus sit amet dictum sit amet justo. \n' +
        '              Mauris vitae ultricies leo integer malesuada nunc vel.\n' +
        '              Tincidunt eget nullam non nisi est sit amet. Turpis nunc \n' +
        '              eget lorem dolor sed. Ut venenatis tellus in metus vulputate \n' +
        '              eu scelerisque.'
    },
    {
      'question': 'Техническая поддержка и сопровождение',
      'answer': 'Laoreet sit amet cursus sit amet dictum sit amet justo. \n' +
        '              Mauris vitae ultricies leo integer malesuada nunc vel.\n' +
        '              Tincidunt eget nullam non nisi est sit amet. Turpis nunc \n' +
        '              eget lorem dolor sed. Ut venenatis tellus in metus vulputate \n' +
        '              eu scelerisque.'
    }
  ]
  openAccordion: boolean[] = []
  toggleIcon(id: number) {
    this.openAccordion[id] = !this.openAccordion[id]
  }

  ngOnInit(): void {
    this.openAccordion[0] = !this.openAccordion[0]
  }
}
