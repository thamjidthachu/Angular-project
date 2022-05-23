import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public serve:MediatorService,public rout:Router) { }

  ngOnInit(): void {
  }

  login(data:any)
  {
    console.log(data)

  }

}
