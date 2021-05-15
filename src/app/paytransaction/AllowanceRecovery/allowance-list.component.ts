import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-AllowanceRecovery',
  templateUrl: './allowance-list.component.html',
  styleUrls: ['./allowance-list.component.css']
})

export class AllowanceRecoveryListComponent  {}
