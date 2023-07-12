import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';

import { COMPONENTS } from './components';
import { MessagesService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      ...COMPONENTS,
      NgFor,
      AsyncPipe
    ]
})
export class AppComponent {
  footerText = 'Zmienna w stopce';

  list$ = this.service.list$;

  constructor(private service: MessagesService) {}
}
