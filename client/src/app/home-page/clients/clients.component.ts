import { Component } from '@angular/core';

@Component({
  selector: 'kpd-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients = [
    {'src': 'assets/img/clients/client-1.jpg', 'alt': 'client-1'},
    {'src': 'assets/img/clients/client-2.jpg', 'alt': 'client-2'},
    {'src': 'assets/img/clients/client-3.jpg', 'alt': 'client-3'},
    {'src': 'assets/img/clients/client-4.jpg', 'alt': 'client-4'},
    {'src': 'assets/img/clients/client-5.jpg', 'alt': 'client-5'},
    {'src': 'assets/img/clients/client-6.jpg', 'alt': 'client-6'},
  ]
}
