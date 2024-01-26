import {Component, Input} from "@angular/core";

@Component({
  selector: 'kpd-toast',
  templateUrl: 'toast.component.html'
})
export class ToastComponent {
  @Input() message!: string;
  constructor() {
  }

}
