import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { InsertEComponent } from './employees/insert-e/insert-e.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { DeletePopupComponent } from './employees/delete-popup/delete-popup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'insertEmployees',
    component: InsertEComponent,
  },
  {
    path: 'updateEmployee/:id',
    component: UpdateEmployeeComponent,
  },
  {
    path: 'delete',
    component: DeletePopupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
