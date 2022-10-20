import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent implements OnInit {

  public duplicateForm !: FormGroup

  constructor(private formBulider : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this .duplicateForm = this.formBulider.group({
      adharCardId :[''],
      name :['']
    })
  }

  duplicate(){
    this.http.post<any>("http://localhost:8083/participants/duplicate", this.duplicateForm.value)
    .subscribe(res=>{
      this.duplicatechecking();  
    },err=>{
      alert("Something went wrong")
    })
  }

  duplicatechecking(){
    this.http.get<any>("http://localhost:8083/participants/checkingduplicate")
    .subscribe(res=>{
      const user = res.find((a : any)=>{
        return a.adharCardId == this.duplicateForm.value.adharCardId
      }
      );
      if(user){
        alert("Applied Succesfully");
      this.duplicateForm.reset();
      this.router.navigate(['login']);
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })

  }
}