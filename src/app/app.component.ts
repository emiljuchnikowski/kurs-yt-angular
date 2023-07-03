import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { COMPONENTS } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      ...COMPONENTS,
      NgFor
    ]
})
export class AppComponent {
  footerText = 'Zmienna w stopce';
  messages = [
    "Wiadomosc 1",
    "Wiadomosc 2",
    "Wiadomosc 3",
  ];

  onMessageAdd(msg: string): void {
    this.messages.push(msg);
  }
}
