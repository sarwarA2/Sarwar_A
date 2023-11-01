import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  title = 'template driven form';
  constructor() { }

  ngOnInit(): void {
  }
  // MyName1="rahul kumar";
  // Password=123456;
  // MobileNo=8863868256;
  //SingerName:string="arijit singh";   // property binding
  //Work:string="singer"
  // MyName="rohit deshmukh";
  // Email="definetym@gmail.com";
  // Mobile=8863868256;
  getUserSubmit(value:any)
  
{
  debugger;
  console.log(value);
}
}
