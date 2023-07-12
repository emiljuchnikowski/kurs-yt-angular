import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    private _source = new BehaviorSubject<string[]>([
        "Wiadomosc 1",
        "Wiadomosc 2",
        "Wiadomosc 3",
      ]);

    list$ = this._source.asObservable();

    add(val: string): void {
        this._source.next([
            ...this._source.value,
            val
        ]);
    }
}