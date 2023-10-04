import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'data-hub/about', component: AboutComponent },
  { path: 'data-hub/contacts', component: ContactsComponent },
  { path: 'data-hub/create', component: CreateComponent },
  { path: 'data-hub/edit/:id', component: EditComponent },
  { path: 'data-hub/home', component: HomeComponent },
  { path: 'data-hub/resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataHubRoutingModule {}
