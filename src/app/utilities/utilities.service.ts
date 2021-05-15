import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

import { Basictype, Da, Emptype } from './utilities.model';

import { environment } from "../../environments/environment";


const BACKEND_URL = environment.apiUrl ;


/* DA Services*/

@Injectable({providedIn: 'root'})
export class DasService {
  private das: Da[] = [];
  private dasUpdated = new Subject<{das: Da[], daCount: number}>();
  get: any;
  daId: any;

  constructor(private http: HttpClient, private router: Router) {}


  getDas(dasPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${dasPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; das: any, maxDas: number }>(
        BACKEND_URL+ "/das/" + queryParams
      )
      .pipe(
        map(daData => {
        return {
          das: daData.das.map((da: { title: any;  _id: any; }) => {
          return {
            title: da.title,
            id: da._id
        };
      }),
      maxDas: daData.maxDas
       };
      })
    )
    .subscribe(transformedDaData => {
        console.log(transformedDaData);
        this.das = transformedDaData.das;
        this.dasUpdated.next({
          das: [...this.das],
          daCount: transformedDaData.maxDas
        });
      });
  }
  getDaUpdateListener() {
    return this.dasUpdated.asObservable();
  }

  getDa(id: string) {
    return this.http.get<{ _id: string; title: number; }>(BACKEND_URL + "/das/"+ id);
  }


addDa( id: string, title: number) {
  debugger;
  const da: Da = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/das/", da)
    .subscribe(responseData => {
      this.router.navigate(["/DAupdate"]);

    });
  }


updateDa(id: string, title: number) {
  debugger;
  const da: Da = { id: id, title: title};
  this.http.put(BACKEND_URL + "/das/" + id, da)
  .subscribe(response => {
    this.router.navigate(["/DAupdate"]);
  });

}
deleteDa(daId: string) {
  return this.http.delete(BACKEND_URL + "/das/" + daId);

}

}


/* Basictype Services*/
@Injectable({providedIn: 'root'})
export class BasictypesService {
  private basictypes: Basictype[] = [];
  private basictypesUpdated = new Subject<{basictypes: Basictype[], basictypeCount: number}>();
  get: any;
  basictypeId: any;


  constructor(private http: HttpClient, private router: Router) {}

  
  getBasictypes(basictypesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${basictypesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; basictypes: any, maxBasictypes: number }>(
        BACKEND_URL+ "/basictypes/" + queryParams
      )
      .pipe(
        map(basictypeData => {
        return {
          basictypes: basictypeData.basictypes.map((basictype: { title: any;  _id: any; creator: any; }) => {
          return {
            title: basictype.title,
            id: basictype._id,
            creator: basictype.creator
        };
      }),
      maxBasictypes: basictypeData.maxBasictypes
       };
      })
    )
    .subscribe(transformedBasictypeData => {
        console.log(transformedBasictypeData);
        this.basictypes = transformedBasictypeData.basictypes;
        this.basictypesUpdated.next({
          basictypes: [...this.basictypes],
          basictypeCount: transformedBasictypeData.maxBasictypes
        });
      });
  }
  getBasictypeUpdateListener() {
    return this.basictypesUpdated.asObservable();
  }

  getBasictype(id: string) {
    return this.http.get<{ _id: string; title: string; }>(BACKEND_URL + "/basictypes/"+ id);
  }

addBasictype( id: string, title: string) {
  const basictype: Basictype = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/basictypes/", basictype)
    .subscribe(responseData => {
      this.router.navigate(["/basictype"]);

    });
  }

updateBasictype(id: string, title: string) {
  const basictype: Basictype = { id: id, title: title};
  this.http.put(BACKEND_URL + "/basictypes/" + id, basictype)
  .subscribe(response => {
    this.router.navigate(["/basictype"]);
  });

}
deleteBasictype(basictypeId: string) {
  return this.http.delete(BACKEND_URL + "/basictypes/" + basictypeId);

}

}

/* Employeetype Services*/
@Injectable({providedIn: 'root'})
export class EmptypesService {
  private emptypes: Emptype[] = [];
  private emptypesUpdated = new Subject<{emptypes: Emptype[], emptypeCount: number}>();
  get: any;
  emptypeId: any;


  constructor(private http: HttpClient, private router: Router) {}

  
  getEmptypes(emptypesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${emptypesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; emptypes: any, maxEmptypes: number }>(
        BACKEND_URL+ "/emptypes/" + queryParams
      )
      .pipe(
        map(emptypeData => {
        return {
          emptypes: emptypeData.emptypes.map((emptype: { title: any;  _id: any; creator: any; }) => {
          return {
            title: emptype.title,
            id: emptype._id,
            creator: emptype.creator
        };
      }),
      maxEmptypes: emptypeData.maxEmptypes
       };
      })
    )
    .subscribe(transformedEmptypeData => {
        console.log(transformedEmptypeData);
        this.emptypes = transformedEmptypeData.emptypes;
        this.emptypesUpdated.next({
          emptypes: [...this.emptypes],
          emptypeCount: transformedEmptypeData.maxEmptypes
        });
      });
  }
  getEmptypeUpdateListener() {
    return this.emptypesUpdated.asObservable();
  }

  getEmptype(id: string) {
    debugger;
    return this.http.get<{ _id: string; title: string; }>(BACKEND_URL + "/emptypes/"+ id);
  }

addEmptype( id: string, title: string) {
  const emptype: Emptype = { id: id, title: title};
  this.http.post<{message: string}>(BACKEND_URL + "/emptypes/", emptype)
    .subscribe(responseData => {
      this.router.navigate(["/employeetype"]);

    });
  }
 
updateEmptype(id: string, title: string) {
  const emptype: Emptype = { id: id, title: title};
  this.http.put(BACKEND_URL + "/emptypes/" + id, emptype)
  .subscribe(response => {
    this.router.navigate(["/employeetype"]);
  });

}
deleteEmptype(emptypeId: string) {
  return this.http.delete(BACKEND_URL + "/emptypes/" + emptypeId);

}

}


