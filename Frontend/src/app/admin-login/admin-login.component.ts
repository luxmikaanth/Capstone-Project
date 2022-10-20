import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBulider : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this .loginForm = this.formBulider.group({
      email :[''],
      password:['']
    })
  }


  login(){
    this.http.get<any>("http://localhost:8082/admin/login")
    .subscribe(res=>{
      const user = res.find((a : any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        console.log("succes");
        this.router.navigate(['adminhome'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }
}
