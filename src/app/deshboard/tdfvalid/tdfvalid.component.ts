import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdfvalid',
  templateUrl: './tdfvalid.component.html',
  styleUrls: ['./tdfvalid.component.css']
})
export class TdfvalidComponent implements OnInit {
  title = 'template driven form';
  @ViewChild('contactForm',null) contactForm: NgForm;
 

  constructor() { }

  ngOnInit(): void {
  }

}
