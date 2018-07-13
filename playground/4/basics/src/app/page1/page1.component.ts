import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  name: string
  rForm: FormGroup

  title = "app"
  myVar = "from main"

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
     this.name= "hueuheuehu"

     this.rForm = this.fb.group({
         name2: this.fb.control('', [Validators.required, Validators.minLength(3)])
     })


   this.myPromise(20).then(value => {
     console.log(`promise result: ${value}`);
     return "uyagsdugysda"
    }).then((r) => {console.log(r)});

    Promise.all([
      this.myPromise('promise 1'),
      this.myPromise2('promise 2')
    ]).then(values=>{
      console.log(`promise result: ${values[0]}`);
      console.log(`promise result: ${values[1]}`);
    });

  }

  myPromise(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  myPromise2(x) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }




}
