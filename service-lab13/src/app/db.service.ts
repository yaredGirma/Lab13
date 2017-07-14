import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  
  private data: [{id:string,name:string,email:string}]  = [
    {id:'1',name:'Fikru',email:'fikru@gmail.com'},
    {id:'2',name:'desta',email:'desta@gmail.com'}
  ];

  getData(){
    return this.data;
  }

  getDataById(id:string){

    let student = this.data.filter((s)=>s.id==id);
    return student[0];
  }

}
