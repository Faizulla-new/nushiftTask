import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any, key: any): any {

    if (value.length == 0 || args == '') {
      return value;
    }

    return value.filter((obj: any) =>
    Object.values(obj).some((value:any) =>
      value.toString().toLowerCase().includes(args.toString().toLowerCase())
    )

      // Object.values(obj).some(value =>
        // typeof value === "string" && value.includes("on")
      // )
    );

    // return value.filter( (respo: any) => { return respo[key] == args});

  }

}
