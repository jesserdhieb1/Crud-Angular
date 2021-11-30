import { Component, OnInit,Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  constructor(private userService: UserService,private router: Router) { }
  user:User;
  ngOnInit(): void {
    this.user=this.userService.CurrentUser;
  }
  fixUser(){
    this.router.navigate(['/show-all-user']);
  }
}
