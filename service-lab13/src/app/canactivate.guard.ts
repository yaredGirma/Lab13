import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService } from "./db.service";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router,private dbService: DbService,){

  }  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> | boolean {
    console.log(route);
    console.log(state);
    console.log("params="+route.params.id);
    let student:any;
    student = this.dbService.getDataById(route.params.id);
    if(student){
        return true;
    }
    this.router.navigate(['error']);
    return false;

  }
}