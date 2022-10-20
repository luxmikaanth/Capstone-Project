import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../api-serivce.service';
import { DuplicateModel } from './duplicate-list.model';

@Component({
  selector: 'app-duplicate-list',
  templateUrl: './duplicate-list.component.html',
  styleUrls: ['./duplicate-list.component.css']
})
export class DuplicateListComponent implements OnInit {


  formValue !: FormGroup;
  DuplicateModelobj : DuplicateModel = new DuplicateModel();
  adharData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;


  constructor(private formbuilber: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this .formValue = this.formbuilber.group({
      id :[''],
      name :[''],
      adharCardId :[''] 
    })
    this.getAllDuplicateAdhar();
  }


  getAllDuplicateAdhar(){
    this.api.getAdhar()
    .subscribe(res=>{
      console.log(res);
      this.adharData = res;
      
    })
  }
}
