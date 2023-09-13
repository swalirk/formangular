import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit{
  
  
  filteredForms:any;
  lengthofData = 0;
  totalLength: number = 0;
  searchText: string = ''; 
  typeCheckbox1: boolean = false;
  typeCheckbox2: boolean = false;
  typeCheckbox3: boolean = false;
  
 
  page:number=1
  forms:any
  constructor(private formservice:FormServiceService){}
  ngOnInit(): void {
   this.loadForms()
  }

  loadForms(){
    this.formservice.getForms().subscribe((res=>{
      this.forms=res

      this.filterForms();
      
    }))
  }
     
  


searchByNumber: boolean = false;
  filterForms() {
    

    this.filteredForms = this.forms.filter((form) => {
      const nameMatch = !this.searchByNumber && (!this.searchText || (form.name && form.name.toLowerCase().includes(this.searchText.toLowerCase())));
      const numberMatch = this.searchByNumber && (!this.searchText || (form.number && form.number.toLowerCase().includes(this.searchText.toLowerCase())));
  
      const noTypeSelected = !this.typeCheckbox1 && !this.typeCheckbox2 && !this.typeCheckbox3;
  
      if ((nameMatch || numberMatch) && (noTypeSelected || (this.typeCheckbox1 && form.type === 'Form') || (this.typeCheckbox2 && form.type === 'Details') || (this.typeCheckbox3 && form.type === 'Summary'))) {
        return true;
      }
  
      return false;
    });

    this.totalLength = this.filteredForms.length;
    this.page = 1;
    
  }
  clearAllCheckboxes(){
    this.typeCheckbox1 = false;
    this.typeCheckbox2 = false;
    this.typeCheckbox3 = false;
    this.searchByNumber=false;
  }
 

  toggleAllCheckboxes() {
    this.typeCheckbox1 = true;
    this.typeCheckbox2 = true;
    this.typeCheckbox3 = true;
    this.searchByNumber=true;
  }

  deleteForm(id: any) {
    const confirmDelete = confirm('Are you sure you want to delete this column?');
  
    if (confirmDelete) {
      this.formservice.deleteForm(id).subscribe((response: any) => {
        alert("Form deleted successfully")
      
        
        this.loadForms()
        
      });
    }
    
  }
 
}
