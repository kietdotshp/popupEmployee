import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


@Component({
  selector: 'employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee: Employee[];
  constructor(
    private rest: EmployeeService,
    private http: HttpClient,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {

   }

  ngOnInit(): void {
    this.loaddata();

  }
  loaddata(){
    this.rest.getAll().subscribe((data) => {
      this.employee = data;
      console.log(this.employee);
    });
  };
  deleteEmployees(id: number) {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      // width: '250px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {

        this.rest.deleteEmployees(id).subscribe(() => {
          this.toastr.success('Nhân viên đã được xóa', 'Thành công');
          this.loaddata();
        });
      }
    });
  }

}
