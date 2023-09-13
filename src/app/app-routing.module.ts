import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormsComponent } from './components/list-forms/list-forms.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { PageTaskComponent } from './components/page-task/page-task.component';


const routes: Routes = [
 {path:'',component:ListFormsComponent},
 {path:'formlist',component:ListFormsComponent},

 {path:'pagetask',component:PageTaskComponent},
 {path:'formlist/add',component:AddFormComponent},
 {path:'formlist/edit/:id',component:EditFormComponent},
 {path:'formlist/view/:id',component:ViewFormComponent},
 {path:'formlist/delete/:id',component:EditFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
