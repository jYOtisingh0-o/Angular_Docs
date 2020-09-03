import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { DataModel } from '../data-model.model';
import { EmployeeService } from '../services/employee.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeService : EmployeeService){}

  // policies : DataModel[];
  // constructor( private db: AngularFirestore,
  //   private employeeService : EmployeeService) { }

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(employees =>{
      console.log(employees);
    });
  }

}
