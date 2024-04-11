import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private appService:AppService,private router:Router) {  }

users:any[]=[
  {
    fName:'Abc',
    lName:'D',
    phone:'1234567890',
    email:'abc@gmail.com',
    pswd:'123456',
  },
   {
    fName:'Efg',
    lName:'H',
    phone:'1234567890',
    email:'abc@gmail.com',
    pswd:'123456'
  },
];

  ngOnInit(){
    this.users.push(this.appService.sendUser);
  }

  Delete(data:any){
      this.users.forEach((value,index) => {
         if(value == data){
         this.users.splice(index,1);
         }
      });
}


Update(data:any){
  this.appService.update = false;
  this.appService.user=data;
  this.router.navigate(['']);
 }


}
