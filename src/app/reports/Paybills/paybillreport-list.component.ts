import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeptModel } from 'src/app/master/master.model';
import { DeptsService } from 'src/app/master/masters.service';
import { Basictype, Emptype } from 'src/app/utilities/utilities.model';
import { BasictypesService, EmptypesService } from 'src/app/utilities/utilities.service';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";
import { Reports } from '../reports.model';

@Component({
  selector: 'app-Paybills',
  templateUrl: './paybillreport-list.component.html',
  styleUrls: ['./paybillreport-list.component.css']
})

export class PaybillreportListComponent implements OnInit {
 



    constructor(public deptsService: DeptsService, public basictypesService: BasictypesService, public emptypesService: EmptypesService, 
                private authService: AuthService) {}

     ngOnInit() {

     
    }
}
