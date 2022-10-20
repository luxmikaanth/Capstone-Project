import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBulider : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this .loginForm = this.formBulider.group({
      mobileNumber :[''],
      password:['']
    })
  }


  login(){
    this.http.get<any>("http://localhost:8083/participants/login")
    .subscribe(res=>{
      const user = res.find((a : any)=>{
        return a.mobileNumber === this.loginForm.value.mobileNumber && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        console.log("succes");
        this.router.navigate(['userhome'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }
}