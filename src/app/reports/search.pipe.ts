import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})

export class SearchPipe implements PipeTransform {

    transform(list: any[], value: any[], key: any[]): any { 
    value.forEach((name:any, index) => {
      if (name) {
        console.log(list);
        console.log(name);
        list = list.filter((item) => {
          console.log(item[key[index]]);
          return (item[key[index]]
            .toString()
            .toLowerCase()
             .indexOf(name.toString().toLowerCase()) !== -1)
        }); 
            
             
      }
    });
    console.log(list);


    return list;
  } 


}
