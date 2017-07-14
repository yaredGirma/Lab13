import { Component } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-students',
  template: `<p>STUDENTS</p>
    <ul>
        <li *ngFor="let student of students">
            <a [routerLink]="['/profile/',student.id]">{{student.name}}</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class StudentsComponent{

  private students: any[];
  constructor(private dbService:DbService) {
      this.students = dbService.getData();
   }

}
