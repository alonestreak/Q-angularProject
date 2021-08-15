import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/models/employee';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  employeeModel = new Employee ( 'Ro' , 'your Address Goes Here' , 1234567890 , '2021-08-15', 'sushantsawant061@gmail.com');

  onSubmit(){
    console.log(this.employeeModel);
  }
}
