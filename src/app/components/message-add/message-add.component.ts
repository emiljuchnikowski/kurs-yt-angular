import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    templateUrl: "./message-add.component.html",
    selector: "app-message-add",
    standalone: true,
    imports: [
        FormsModule
    ]
})
export class MessageAddComponent {
    text = "";

    @Output() add = new EventEmitter<string>();

    onClick(): void {
        this.add.emit(this.text);
        this.text = "";
    }
}