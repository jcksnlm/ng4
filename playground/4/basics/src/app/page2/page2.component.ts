import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, Subject } from "rxjs"
import { catchError, map } from "rxjs/operators"

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  httpResponse: string
  routeParameter: string

  constructor(
  private http: HttpClient,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.returnHttp().subscribe((response: any) => {
      this.httpResponse = JSON.stringify(response)
    })

    this.routeParameter = this.activatedRoute.snapshot.params['id']
    console.log(this.routeParameter)



  this.subject.subscribe((data) => {
    console.log("Subscriber 1 got data >>>>> "+ data);
  });
  this.subject.subscribe((data) => {
    console.log("Subscriber 2 got data >>>>> "+ data);
  });

  this.subject.next("Eureka");
  }

  returnHttp(): Observable<any> {
    return this.http.get('https:/localhost:3001/tests').pipe(
      map(res => res),
      catchError(e => {
        this.httpResponse = "ERROR HAPPENED: " + e.message
        throw (e)
      })
    )
  }

  outputReturn(event: string) {
      alert(event)
  }

  subject = new Subject<string>();
  // We subscribe to the subject



}
