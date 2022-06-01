import { Component, OnInit } from '@angular/core';
import { Department } from "src/app/department";
import { DepartmentService } from "src/app/department.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

 department: Department = new Department();
  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.departmentService.createDepartment(this.department).subscribe(data => {
      console.log(data);
      this.goToDepartmentList();
    },
      error => console.log(error));
  }

  goToDepartmentList() {
    this.router.navigate(['/department']);
  }

  onSubmit() {
    console.log(this.department);
    this.saveEmployee();
  }

}
