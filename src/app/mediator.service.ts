import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  setData(params: any){
    console.log(params)
    return this.client.get('http://beyont.in/angularapi/registration.php',{params})
  }
  authdata(params: any){
    console.log("Data is ",params)
    return this.client.get('http://beyont.in/angularapi/login.php',{params})
  }
  viewData(){
    return this.client.get('http://beyont.in/angularapi/getuser.php')


  }
  dltData(params:any){
    return this.client.get("http://beyont.in/angularapi/deleteuser.php?id="+params)

  }
  editbyid(params:any)
  {
    return this.client.get('http://beyont.in/angularapi/getuserbyid.php?email='+params)

  }
  upData(params: any){
    console.log(params)
    return this.client.get('http://beyont.in/angularapi/updateuser.php',{params})
  }




  constructor(public client : HttpClient) { }
}
