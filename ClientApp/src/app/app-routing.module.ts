import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddIpsComponent} from './add-ips/add-ips.component';
import {ListIpsComponent} from './list-ips/list-ips.component';
import {EditIpsComponent} from './edit-ips/edit-ips.component';
import { from } from 'rxjs';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'addIps', component: AddIpsComponent},
  { path: 'listIps', component: ListIpsComponent},
  { path: 'editIps/: id', component: EditIpsComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
