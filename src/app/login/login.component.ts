import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serve:MediatorService,public rout:Router) { }

  ngOnInit(): void {
  }
  autheticate(data:any)
  {
    console.log(data)
  }


}
