import { Component } from '@angular/core';

import { COMPONENTS } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      ...COMPONENTS
    ]
})
export class AppComponent {
  footerText = 'Zmienna w stopce';
}
