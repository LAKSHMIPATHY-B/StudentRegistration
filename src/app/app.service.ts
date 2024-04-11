import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {

 public sendUser:any={
  fName:'',
  lName:'',
  phone:'',
  email:'',
  pswd:'',
};
 public update:any;
 public user:any= {
  fName:'',
  lName:'',
  phone:'',
  email:'',
  pswd:'',
};
}
