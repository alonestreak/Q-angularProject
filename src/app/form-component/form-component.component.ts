import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/models/employee';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  employeeModel = new Employee ( '' , '' , 1234567890 , (new Date()).toISOString().substring(0,10), '');

  onSubmit(){
    console.log(this.employeeModel);
  }
}
