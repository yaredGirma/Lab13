import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
      Profile not found.
  `
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
