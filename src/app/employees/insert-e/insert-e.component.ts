import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-e',
  templateUrl: './insert-e.component.html',
  styleUrls: ['./insert-e.component.css']
})
export class InsertEComponent implements OnInit {
  employee: Employee;
  addForm: FormGroup;
  btnDisable = false;
  constructor(
    private rest: EmployeeService,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }
  public initForm() {
    this.addForm = this.fb.group({
      userName: new FormControl('',[Validators.required,Validators.minLength(8)]),
      fullName: new FormControl('', [Validators.required,Validators.minLength(8)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      address: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
    });
  }

  get userName() { return this.addForm.get('userName'); }
  get fullName() { return this.addForm.get('fullName'); }
  get password() { return this.addForm.get('password'); }
  get address() { return this.addForm.get('address'); }
  get age() { return this.addForm.get('age'); }
  onSubmit() {
    console.log(this.addForm.value)
  }
  get f() {
    return this.addForm.controls
  }
  saveEmployee() {

    this.btnDisable = true;
    console.log('test', this.addForm.value);

    this.router.navigate(['./admin/list-je'])
    this.rest.insertEmployee(this.addForm.value).subscribe((data) => {
      // this.data.success('Employee is save');
      this.btnDisable = false;
      // alert("đăng ký thanh cong")
      this.router.navigate(['./employees'])
    });
  }
  showSuccess() {
    this.toastr.success(' Thêm Thành công!');

  }
}
