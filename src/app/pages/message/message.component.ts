import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { map } from "rxjs";

@Component({
    template: `<h1>Zaznaczona wiadomość: <b>{{ msg$ | async }}</b></h1>`,
    imports: [ RouterModule, CommonModule ],
    standalone: true
})
export class MessageComponent {
    msg$ = this.route.params.pipe(
        map(({ body }) => body)
    );

    constructor(private route: ActivatedRoute) { }
}