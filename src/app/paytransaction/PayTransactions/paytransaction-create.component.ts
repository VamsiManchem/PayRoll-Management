import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-PayTransactions',
  templateUrl: './paytransaction-create.component.html',
  styleUrls: ['./paytransaction-create.component.css']
})

export class PayTransactionCreateComponent  {
  
}
