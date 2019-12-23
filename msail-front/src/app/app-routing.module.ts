import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoureurListComponent } from './component/coureur-list/coureur-list.component';
import { RegateListComponent } from './component/regate-list/regate-list.component';

const routes: Routes = [
  {path: 'coureurs', component: CoureurListComponent},
  {path: 'regates', component: RegateListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
