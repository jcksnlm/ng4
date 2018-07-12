import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent implements OnInit {
  @Input() btnName:string
  @Output() emitAlert = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAlertEvent() {
     this.emitAlert.emit('any value here')
  }

}
