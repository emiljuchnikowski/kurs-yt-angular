import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    standalone: true,
    imports: [NgIf]
})
export class FooterComponent {
    @Input() text!: string;
}