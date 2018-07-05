import { Component } from '@angular/core';
import { Student } from './student/student.model'
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad';

  // luke = {
  //   name: "luke",
  //   isJedi: true,
  //   temple: 'Corucosan'
  // }
  //
  // leia = {
  //   name: "leia",
  //   isJedi: false
  // }
  //
  // han = {
  //   name: "han",
  //   isJedi: false
  // }

  students: Student[] = [
    {
      name: "luke",
      isJedi: true,
      temple: 'Corucosan'
    },
    {
      name: "leia",
      isJedi: false
    },
    {
      name: "han",
      isJedi: false
    }
  ]

}
