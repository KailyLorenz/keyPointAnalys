import { Component } from '@angular/core';

@Component({
  selector: 'kpd-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients = [
    {'src': 'assets/img/clients/bitrix-logo.jpg', 'alt': 'bitrix-logo'},
    {'src': 'assets/img/clients/microsoft-sql-server.jpg', 'alt': 'microsoft-sql-server'},
    {'src': 'assets/img/clients/my_warehouse.jpg', 'alt': 'my_warehouse'},
    {'src': 'assets/img/clients/power_bi.jpg', 'alt': 'power_bi'},
    {'src': 'assets/img/clients/visual_studio.jpg', 'alt': 'visual_studio'},
    {'src': 'assets/img/clients/excel-logo.jpg', 'alt': 'excel-logo'},
  ]
}
