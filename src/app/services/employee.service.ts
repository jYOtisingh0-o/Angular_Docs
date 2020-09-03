import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../data-model.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeCollection : AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;

  constructor(public firestore: AngularFirestore) { 
    this.employees = this.firestore.collection('employees').valueChanges();
  }

  getEmployees(){
    return this.employees;
  }
}

