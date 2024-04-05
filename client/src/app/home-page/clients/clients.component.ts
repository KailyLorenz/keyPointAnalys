import { Component } from '@angular/core';

@Component({
  selector: 'kpd-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients = [
    {'src': 'assets/img/clients/bitrix-logo.png', 'alt': 'bitrix-logo'},
    {'src': 'assets/img/clients/wildberries-logo.png', 'alt': 'microsoft-sql-server'},
    {'src': 'assets/img/clients/ozon-logo.png', 'alt': 'ozon-logo'},
    {'src': 'assets/img/clients/excel-logo.jpg', 'alt': 'my_warehouse'},
    {'src': 'assets/img/clients/my_warehouse.jpg', 'alt': 'my_warehouse'},
    {'src': 'assets/img/clients/1c-logo.png', 'alt': '1c-logo'},

  ]
}
