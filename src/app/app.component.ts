import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import * as _ from "lodash";
import { Router, RouterModule } from '@angular/router';
 
import { COMPONENTS } from './components';
import { MessagesService } from './services';
import { PIPES } from './pipes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      ...COMPONENTS,
      ...PIPES,
      RouterModule,
      NgFor,
      AsyncPipe
    ]
})
export class AppComponent {
  footerText = 'Zmienna w stopce';

  list$ = this.service.list$;

  constructor(
    private service: MessagesService,
    private router: Router
  ) {}

  onNavHome(): void {
    this.router.navigate(["/home"]);
  }

  getUniqueList(list: Array<string> | null): Array<string> | null {
    if (!list) return list;

    console.log("invoke from component");

    return _.uniq(list);
  }
}
