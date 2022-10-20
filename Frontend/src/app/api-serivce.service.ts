import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

 

  getAdhar(){
    return this.http.get<any>("http://localhost:8082/admin/alladhardetails")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAdhar(data : any, AdharCardId: number){
    return this.http.put<any>("http://localhost:8082/admin/update/"+AdharCardId, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  deleteAdhar(id : number){
    return this.http.delete<any>("http://localhost:8082/admin/delete/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  getDuplicate(){
    return this.http.get<any>("http://localhost:8082/admin/duplicatelist")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
