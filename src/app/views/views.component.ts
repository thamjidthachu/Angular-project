import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  views: any;

  constructor(public serve:MediatorService,public rout:Router) { }

  ngOnInit(): void {
    this.serve.viewData().subscribe(
      (res:any)=>
      {
        this.views=res['data']
        console.log(res['data'])
      }
    )
  }

}
