import { IEmployee } from './IEmployee';
export interface IEmployeeService {
  Add(employee: IEmployee): boolean;
  GetEmployeeById(id: number): IEmployee | undefined;
  UpdateEmployee(employee: IEmployee | undefined): boolean;
  Delete(id: number): boolean;
  LoadData(): Array<IEmployee>;
}
