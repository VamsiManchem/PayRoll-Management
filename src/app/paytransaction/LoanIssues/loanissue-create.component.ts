import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-LoanIssues',
  templateUrl: './loanissue-create.component.html',
  styleUrls: ['./loanissue-create.component.css']
})

export class LoanissueCreateComponent  {}
