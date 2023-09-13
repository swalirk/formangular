import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

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
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    hidden: null,
    hidePremium: null,
    id: null,
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
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.formservice.getForm(this.id).subscribe((res:any)=>
    {
      this.newForm=res
      console.log(res)
    })
  }

}
