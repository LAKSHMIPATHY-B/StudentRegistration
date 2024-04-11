import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  fname = new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]);
  lname = new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-z]*')]);
  phone = new FormControl<string>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]);
  email = new FormControl<string>('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9-]+\\.[a-z]{2,4}$')]);
  pswd = new FormControl<string>('', [Validators.required,Validators.minLength(6)]);

  user: any = new FormGroup({
    fName: this.fname,
    lName: this.lname,
    phone: this.phone,
    email: this.email,
    pswd: this.pswd
  });


  Submit() {
    if (this.user.valid) {

      this.appService.sendUser =this.user.value;

      this.user.reset();
      console.log(this.btn = !this.btn);
      alert("Successfully submited form")
      
    }
  }
  btn:any;

    ngOnInit(): void {
      console.log(this.appService.update);
     this.btn = this.appService.update;
     this.user.setValue(this.appService.user);
     
  }
}
