import { CompanyComponent } from './company/company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ServiceComponent } from './service/service.component';;
const routes: Routes = [
  { path: 'service', component: ServiceComponent},
  {path: 'career', component: CareerComponent},
  { path: 'company', component: CompanyComponent},
  { path: '', redirectTo: '/company', pathMatch: 'full'},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
