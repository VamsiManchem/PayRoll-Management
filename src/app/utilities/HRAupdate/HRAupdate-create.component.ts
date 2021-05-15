import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Params } from '@angular/router';

//import { Post } from '../master.model';
//import { PostsService } from '../masters.service';
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: 'app-HRAupdate',
  templateUrl: './HRAupdate-create.component.html',
  styleUrls: ['./HRAupdate-create.component.css']
})

export class HRAupdateCreateComponent  {}
