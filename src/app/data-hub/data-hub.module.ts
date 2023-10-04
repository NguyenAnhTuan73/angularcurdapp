import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataHubRoutingModule } from './data-hub-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ResumeComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    DataHubRoutingModule,
    FormsModule
  ]
})
export class DataHubModule { }
