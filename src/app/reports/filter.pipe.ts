import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: "filter"
})

export class FilterPipe implements PipeTransform {
 
  /* transform(list: any[], value: any[], key: any[]): any { */
    transform(EmpRecord: any[], value: any[], key: any[]): any {
       
    value.forEach((name:any, index) => {
      if (name) {
        console.log(EmpRecord);
        console.log(name);
        /* list = list.filter((item) => { */
        EmpRecord = EmpRecord.filter((item) => {
        // console.log(item.value[key[index]].toString().toLowerCase().indexOf(name.toString().toLowerCase()) !== -1);
         
          return (item.value[key[index]]
            .toString()
            .toLowerCase()
             .indexOf(name.toString().toLowerCase()) !== -1)
          });
      }
    });
    console.log(EmpRecord);


    return EmpRecord;
  }
}
