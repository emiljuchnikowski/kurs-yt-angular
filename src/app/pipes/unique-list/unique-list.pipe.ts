import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
    name: "uniqueList",
    standalone: true
})
export class UniqueListPipe implements PipeTransform {
    transform(list: Array<string> | null, debug?: boolean): Array<string> | null {
        if (!list) return list;
    
        if(debug) console.log("invoke from pipe");
    
        return _.uniq(list);
    }
}