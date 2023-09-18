import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { form } from '../models/form';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private apiUrl:any = environment.apiUrls
  constructor(private http: HttpClient) { }
  getTable(id:any){
    return this.http.get<any>(this.apiUrl.getTable+id)
  
  }


  getForms(): Observable<form> {
    return this.http.get<form>(this.apiUrl.getForms)
  }
  deleteForm(id: string){
    return this.http.delete(this.apiUrl.deleteForm + id)
  }
  addForm (data:form):Observable<form>{
    return this.http.post<form>(this.apiUrl.addForm,data)
  }
  getForm(id:string){
    return this.http.get<form>(this.apiUrl.getForm+id)
  
  }
  editForm = (id:string,data:form)=>{
    return this.http.put(this.apiUrl.editForm+id,data)
  }
  getTableNames =()=>{
    return this.http.get(this.apiUrl.getTablenames);
  }
}
