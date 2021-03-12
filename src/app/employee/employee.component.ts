import { ThrowStmt } from '@angular/compiler';
import { EmployeeService } from './Models/EmployeeService';
import { IEmployee } from './Models/IEmployee';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EmployeeComponent implements OnInit {
  private employeeService: EmployeeService;
  selectedEmployee: IEmployee | undefined;

  isEdit: boolean = false;
  employeList: MatTableDataSource<IEmployee> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'actions'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor() {
    this.employeeService = new EmployeeService();
  }

  ngOnInit(): void {
    this.employeList = new MatTableDataSource(this.employeeService.LoadData());
  }

  addEmployee: IEmployee = {
    id: 0,
    name: '',
    salary: 0,
    department: '',
  };

  showEmployeeData(id: number) {
    console.log(id);
    this.isEdit = false;
    this.selectedEmployee = this.employeeService.GetEmployeeById(id);
    console.log(this.selectedEmployee);
  }

  editEmployeeData(id: number) {
    this.selectedEmployee = this.employeeService.GetEmployeeById(id);
    this.isEdit = true;
  }

  updateEmployeeData() {
    console.log(this.selectedEmployee);

    const isUpdate = this.employeeService.UpdateEmployee(this.selectedEmployee);
    if (isUpdate) {
      this.employeList = new MatTableDataSource(
        this.employeeService.LoadData()
      );
    }
  }

  deletEmployeeData(id: number) {
    if (this.employeeService.Delete(id)) {
      this.employeList = new MatTableDataSource(
        this.employeeService.LoadData()
      );
    }
  }

  addEmployeeData() {
    if (this.employeeService.Add(this.addEmployee)) {
      this.employeList = new MatTableDataSource(
        this.employeeService.LoadData()
      );

      this.addEmployee = {
        id: 0,
        name: '',
        salary: 0,
        department: '',
      };
    }
  }

  getValue(target: EventTarget | null): string {
    if (target == null) return '';
    return (target as HTMLInputElement).value;
  }

  ToNumber(val: string | null) {
    if (val == null) return 0;
    return Number(val);
  }
}
