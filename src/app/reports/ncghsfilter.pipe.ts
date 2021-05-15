/* import { Pipe, PipeTransform } from "@angular/core";

debugger;
@Pipe({
  name: "ncghsfilter"
})

export class NcghsfilterPipe implements PipeTransform {
 
   transform(list: any[], value: any[], key: any[]): any { 
    transform(EmpRecord: any[], value: any[], key: any[]): any {
       
    value.forEach((noncghs:any, index) => {
      if (noncghs =='no') {
        console.log(noncghs);
       // console.log(name);
         list = list.filter((item) => { 
        EmpRecord = EmpRecord.filter((item) => {
        //  console.log(item.value[key[index]].toString().toLowerCase().indexOf(name.toString().toLowerCase()) !== -1);
          console.log(EmpRecord);
          return (item.value[key[index]]
            .toString()
            .toLowerCase()
             .indexOf(noncghs.toString().toLowerCase()) !== -1)
          });
      }
    });
    console.log(EmpRecord);


    return EmpRecord;
  }
}
 */