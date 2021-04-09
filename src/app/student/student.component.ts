import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const student: Student = {name: 'Aylin', age: 18,  isMale: false, pageUrl: 'amazon', fatherLastName: 'Rios'};
  }

}
