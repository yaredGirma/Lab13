import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { DbService } from './db.service';

@Component({
  selector: 'app-profile',
  template: `
    STUDENT PROFILE <br>
    Name: {{student.name}} <br>
    Email: {{student.email}}
  `
})
export class ProfileComponent{

  id: string;
  student: {};
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,private dbService: DbService, private router:Router) { 

    this.subscription = activatedRoute.params.subscribe(
        (param: any) => {
          this.id = param['id'];
          this.student = dbService.getDataById(this.id);
        }
    );
  }

}
