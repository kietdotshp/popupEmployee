import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee;
  editForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private Fb: FormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getEmployee();
  }
  public initForm() {
    this.editForm = this.Fb.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
    });
  }
  get userName() { return this.editForm.get('userName'); }
  get fullName() { return this.editForm.get('fullName'); }
  get password() { return this.editForm.get('password'); }
  get address() { return this.editForm.get('address'); }
  get age() { return this.editForm.get('age'); }
  public getEmployee() {
    this.employeeService
      .getEmployeeById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.editForm.patchValue({
          userName: data.userName,
          fullName: data.fullName,
          password: data.password,
          address: data.address,
          age: data.age,
        });
        console.log(data);
      });
  }
  public updateEmployee() {

    this.employeeService

      .updateEmployee(this.editForm.value, this.route.snapshot.params['id'])
      .subscribe((data) => {
        console.log('data', data);
        // alert("update thanh cong")
        this.router.navigate(['./employees'])
      });
  }

  get f() {
    return this.editForm.controls;
  }
  showSuccess() {
    this.toastr.success(' Sửa Thành công!');

  }
}
