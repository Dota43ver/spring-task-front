import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  listOfTasks: any = [];

  constructor(private service: EmployeeService) {
    this.getTasks();
  }

  getTasks() {
    this.service.getEmployeeTasksById().subscribe((res) => {
      console.log(res);
      this.listOfTasks = res;
    });
  }
}
