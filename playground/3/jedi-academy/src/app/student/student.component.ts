import { Component, OnInit, Input } from '@angular/core';
import {Student} from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // name: string = 'Luke'
  // isJedi: boolean = true

  // @Input() name: string
  // @Input() isJedi: boolean

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    alert(`Student: ${this.student.name}`)
  }

}
