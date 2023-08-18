import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    private _source = new BehaviorSubject<string[]>([]);

    list$ = this._source.asObservable();

    constructor(private http: HttpClient) {
        this.init();
    }

    add(val: string): void {
        this._source.next([
            ...this._source.value,
            val
        ]);
    }

    private async init(): Promise<void> {
        const data = await lastValueFrom(this.http.get<string[]>("/assets/messages.json"));
        this._source.next(data);
    }
}