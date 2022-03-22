import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();

 
  constructor(private id:number,
              private email:String,
              private password:String ) {}
    
   

  ngOnInit() {
  }
 performLogin()
 {
    console.log("Id is",this.user.id);
   console.log("Email is",this.user.email);
   console.log("Password is",this.user.password);
   let result=this.id;
console.log(result);


 }
} 




