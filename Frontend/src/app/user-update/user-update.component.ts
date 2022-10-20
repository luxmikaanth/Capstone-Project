import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../api-serivce.service';
import { AdharModel } from './user-update.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  formValue !: FormGroup;
  AdharModelobj : AdharModel = new AdharModel();
  adharData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

   constructor(private formbuilber: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this .formValue = this.formbuilber.group({
      name :[''],
      email :[''],
      mobileNumber :[''],
      gender :[''],
      address :[''],
      dob :[''],
      issueDate:[''],
      status:['']
    })
    this.getAllAdhar();
  }

  clickAddEMployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getAllAdhar(){
    this.api.getAdhar()
    .subscribe(res=>{
      console.log(res);
      this.adharData = res;
      
    })
  }


  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.AdharModelobj.adharCardId = row.adharCardId;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobileNumber'].setValue(row.mobileNumber);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['issueDate'].setValue(row.issueDate);
    this.formValue.controls['status'].setValue(row.status);
   

  }


  updateAdharDetails(){
    this.AdharModelobj.name = this.formValue.value.name;
    this.AdharModelobj.email = this.formValue.value.email;
    this.AdharModelobj.mobileNumber = this.formValue.value.mobileNumber;
    this.AdharModelobj.gender = this.formValue.value.gender;
    this.AdharModelobj.address = this.formValue.value.address;
    this.AdharModelobj.dob = this.formValue.value.dob;
    this.AdharModelobj.issueDate = this.formValue.value.issueDate;
    this.AdharModelobj.status = this.formValue.value.status;


    this.api.updateAdhar(this.AdharModelobj, this.AdharModelobj.adharCardId)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAdhar();
    })
  }
}
