import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  baseurl = "https://localhost:7235/api/Form"
  constructor(private http: HttpClient) { }

  getForms(): Observable<any> {
    return this.http.get<any>(this.baseurl)
  }
  deleteForm(id: any): Observable<any> {
    return this.http.delete("https://localhost:7235/api/Form?id=" + id)
  }
  addForm (data:any):Observable<any>{
    return this.http.post<any>("https://localhost:7235/api/Form",data)
  }
  getForm(id:any){
    return this.http.get<any>(`https://localhost:7235/api/Form/${id}`)
  
  }
  editForm = (id:any,data:any)=>{
    return this.http.put("https://localhost:7235/api/Form/"+id,data)
  }
  getTableNames =()=>{
    return this.http.get("https://localhost:7235/api/Table/getAllTableNames");
  }
}
