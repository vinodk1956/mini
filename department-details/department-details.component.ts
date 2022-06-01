import { Component, OnInit } from '@angular/core';
import { Department } from "src/app/department";
import { ActivatedRoute } from "@angular/router";
import { DepartmentService } from "src/app/department.service";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

 id: number
  department: Department
  constructor(private route: ActivatedRoute, private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.department = new Department();
    this.departmentService.getDepartmentById(this.id).subscribe(data => {
      this.department = data;
    });
  }

}
