import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
  SubmitForm(value:NgForm)
  {
    console.log(value)
  }
}
