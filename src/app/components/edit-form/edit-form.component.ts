import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{
  @ViewChild('FormData') formData: NgForm;
  id:any
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
    tableId: null,
    templateFile: null,
    type: null,
  };

  ngOnInit(): void {
    this.getTableNames();
    this.id=this.route.snapshot.paramMap.get('id')
    this.formservice.getForm(this.id).subscribe({
      next:(res)=>
    {
      this.newForm=res
      
    },
    error: (e) => {
      alert("Error In Getting Data")
      this.router.navigate(['/formlist'])
    }
  })
  }
  constructor(private formservice:FormServiceService,private router:Router,private route:ActivatedRoute){}

  tableNames:any=[]
  getTableNames = ()=>{
    this.formservice.getTableNames().subscribe({
      next:(response)=>{
        this.tableNames=response
       
      },
      error: (e) => {
        alert("Error In Getting Data")
        this.router.navigate(['/formlist'])
      }
  })
  }

  updateForm(){
    
    if(this.formData.valid){

    
    if(this.newForm.type!='Form')
    {
      this.newForm.formType=null,
      this.newForm.number=null,
      this.newForm.hidden=null,
      this.newForm.hidePremium=null
      
    }
    if(this.newForm.type=='Form'||this.newForm.type=='Comment')
    {
      this.newForm.tabCondition=null,
      this.newForm.tabResourceName=null
    }
    if(this.newForm.type!='Template')
    {
      this.newForm.templateFile=null
      
    }
    if(this.newForm.type=='Details')
    {
      this.newForm.minOccurs=null,
      this.newForm.maxOccurs=null,
      this.newForm.tabCondition=null,
      this.newForm.tabResourceName=null;
    }

 

    this.formservice.editForm(this.newForm.id,this.newForm).subscribe
   ({
    next:(r)=>{
    
      alert("Updated Successfully")
    this.router.navigate(['/formlist','view',this.newForm.id])
    },
    error: (e) => {
      alert("Error In Updating Form Page")
      this.router.navigate(['/formlist'])
    }
   })
  
  }
   else{
    alert("Please Enter Required Fields")
   }
  }




}
