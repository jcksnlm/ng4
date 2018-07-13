import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private msgSource = new BehaviorSubject<any>("default text")
  telecast
  constructor()  { }
}
