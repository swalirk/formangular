import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @ViewChild('FormData') formData: NgForm;
  constructor(private formservice:FormServiceService,private router:Router){}
  newForm : any={
    addChangeDeleteFlag: null,
    btnCndAdd: null,
    btnCndCopy: null,
    btnCndDelete: null,
    btnCndModify: null,
    btnCndRenumber: null,
    btnCndView: null,
    btnCndViewDetail: null,
    btnLblAdd: null,
    btnLblCopy: null,
    btnLblDelete: null,
    btnLblModify: null,
    btnLblRenumber: null,
    btnLblView: null,
    btnLblViewDetail: null,
    btnResAdd: null,
    btnResCopy: null,
    btnResDelete: null,
    btnResModify: null,
    btnResRenumber: null,
    btnResView: null,
    btnResViewDetail: null,
    comment: null,
    condition: null,
    helpText: null,
    hidden: null,
    hidePremium: null,
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    maxOccurs: null,
    minOccurs: null,
    name: null!,
    number: null,
    ratebookId: 'bd0a4d26-ed9e-4f3d-857f-97a9ebae2553',
    sequence: null!,
    subSequence: null!,
    tabCondition: null,
    tabResourceName: null,
    tableId: null!,
    templateFile: null,
    type: null!,
  };

  ngOnInit(): void {
    this.getTableNames();
  }
  tableNames:any=[]
  getTableNames = ()=>{
    this.formservice.getTableNames().subscribe(
      (response:any)=>{
        this.tableNames=response
       
      }
    )
  }
  isSubmitted:Boolean= false

   
  addForm(){
    
    if(this.formData.valid)
    {

    
    
    this.formservice.addForm(this.newForm).subscribe((res:any)=>
    {


      if(res)
      {
        alert("Page Added Successfully")
        this.router.navigate(['/formlist','view',res.id])
      }
      else
      {
        alert("Something WEent Wrong")
        this.router.navigate(['/formlist'])
      }
      
      
     
    })}
    else{
      alert("please Enter Required Fields")
    }

  }

}
