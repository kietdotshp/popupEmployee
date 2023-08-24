import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeesComponent } from "./employees.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InsertEComponent } from "./insert-e/insert-e.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
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

    ],
  },
];

@NgModule({
  declarations: [
    EmployeesComponent,
    UpdateEmployeeComponent,
    InsertEComponent,
    DeletePopupComponent
  ],
  entryComponents: [DeletePopupComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,



  ],
  exports: [RouterModule],
})

export class EmployeesModule { }
