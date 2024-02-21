import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kpd-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [
    { 'question': 'Соглашение о конфиденциальности (NDA)',
      'answer': 'Подпишем соглашение о  полной конфиденциальности'},
    { 'question': 'Интервью с Вами (1-2 часа) ',
      'answer': 'Аудит вашего управленческого учета, ' +
        'определение KPI для анализа и источников хранения данных'},
    { 'question': 'Создание ТЗ и его защита перед Заказчиком',
      'answer': 'После проведения Интервью, мы в течение недели ' +
        'подготовим техническое задание, для согласования ' +
        'его с Вами'},
    { 'question': 'Разработка решение проекта',
      'answer': 'Наша команда разработчиков в кратчайшие сроки ' +
        'создаст проект, проведет тестирование всех мер, и ' +
        'после отдаст Вам готовое решение Вашей проблемы'},
    {
      'question': 'Внедрение и передача Заказчику. Обучение сотрудников',
      'answer': 'Мы можем развернуть проект как в web Power BI, так и на Report Server. ' +
        'После развертывания проекта мы проведем обучение с пользовательским ' +
        'функционалом системы отчетности'
    },
    {
      'question': 'Техническая поддержка и сопровождение',
      'answer': 'После завершения проекта, мы готовы ' +
        'развивать и поддерживать Вашу систему'
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
