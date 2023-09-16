import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { form } from 'src/app/models/form';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  newForm : form={
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
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    hidden: null,
    hidePremium: null,
    id:'00000000-0000-0000-0000-000000000000',
    maxOccurs: null,
    minOccurs: null,
    name: null,
    number: null,
    ratebookId: null,
    sequence: null,
    subSequence: null,
    tabCondition: null,
    tabResourceName: null,
    tableId: null,
    templateFile: null,
    type: null,
  };

  constructor(private formservice:FormServiceService,private router:Router,private route:ActivatedRoute){}
  id:any
  tableData:any={
    name:null
  };
  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id')
    this.formservice.getForm(this.id).subscribe((res:any)=>
    {
      this.newForm=res
      console.log(res)
      this.formservice.getTable(this.newForm.tableId).subscribe((response:any)=>
    {
      console.log(response)
      this.tableData=response
      
    })
    })
    
  }

}
