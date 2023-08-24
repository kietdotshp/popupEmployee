import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private API = " http://localhost:3000/";
  public getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API + 'employees');
  };
  public deleteEmployees(id: number): Observable<Employee> {
    return this.http.delete<any>(this.API + 'employees/' + `${id}`);
  };
  public updateEmployee(employee: Employee, id: number): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.API + 'employees/' + id, employee);
  };
  public insertEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.API + 'employees/', employee);
  };
  public getEmployeeById(id: number) {
    return this.http.get<Employee>(this.API + 'employees/' + id);
  }

}
