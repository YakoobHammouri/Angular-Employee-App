import { ThrowStmt } from '@angular/compiler';
import { IEmployee } from './IEmployee';
import { IEmployeeService } from './IEmployeeService';
export class EmployeeService implements IEmployeeService {
  private employeeList: Array<IEmployee> = [
    {
      id: 1,
      name: 'Employee ',
      salary: 2000,
      department: 'IT',
    },
    {
      id: 2,
      name: 'Employee 2',
      salary: 2000,
      department: 'Accounting',
    },
    {
      id: 3,
      name: 'Employee 3',
      salary: 2000,
      department: 'IT',
    },
    {
      id: 4,
      name: 'Employee 4',
      salary: 2000,
      department: 'Managment',
    },
    {
      id: 5,
      name: 'Employee 5',
      salary: 2000,
      department: 'Managment',
    },
    {
      id: 6,
      name: 'Employee 6',
      salary: 2000,
      department: 'NetWork',
    },
    {
      id: 7,
      name: 'Employee 7',
      salary: 2000,
      department: 'Security',
    },
  ];
  Add(employee: IEmployee): boolean {
    employee.id = Math.floor(Math.random() * 1000000);
    this.employeeList.push(employee);
    return true;
  }
  Delete(id: number): boolean {
    const index = this.employeeList.findIndex((item) => item.id == id);
    if (index == -1) return false;
    this.employeeList.splice(index, 1);
    return true;
  }

  GetEmployeeById(id: number): IEmployee | undefined {
    return this.employeeList.find((item) => item.id == id);
  }

  UpdateEmployee(employee: IEmployee | undefined): boolean {
    if (!employee) return false;
    const temp = this.employeeList.find((item) => item.id == employee.id);
    const index = this.employeeList.findIndex((item) => item.id == employee.id);

    if (!temp) return false;
    if (index == -1) return false;

    this.employeeList[index] = {
      id: temp.id,
      name: employee.name,
      salary: employee.salary,
      department: employee.department,
    };

    return true;
  }

  LoadData(): IEmployee[] {
    return this.employeeList;
  }
}
