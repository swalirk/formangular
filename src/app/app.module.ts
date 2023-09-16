import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFormsComponent } from './components/list-forms/list-forms.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ViewFormComponent } from './components/view-form/view-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTaskComponent } from './components/page-task/page-task.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    ListFormsComponent,
    EditFormComponent,
    AddFormComponent,
    ViewFormComponent,
    PageTaskComponent,
    FooterComponent,
    HeaderComponent
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
