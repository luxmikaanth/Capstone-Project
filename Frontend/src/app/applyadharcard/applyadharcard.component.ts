import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applyadharcard',
  templateUrl: './applyadharcard.component.html',
  styleUrls: ['./applyadharcard.component.css']
})
export class ApplyadharcardComponent implements OnInit {

  public applyForm !: FormGroup

  constructor(private formBulider : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this .applyForm = this.formBulider.group({
      name :[''],
      dob :[''],
      address :[''],
      email :[''],
      mobileNumber :[''], 
      gender :[''],
      issueDate:['']
    })
  }

  Apply(){
    this.http.post<any>("http://localhost:8083/participants/apply", this.applyForm.value)
    .subscribe(res=>{
      alert("Applied Succesfully");
      this.applyForm.reset();
      this.router.navigate(['login']);   
    },err=>{
      alert("Something went wrong")
    })
  }
}

