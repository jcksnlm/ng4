import {Routes} from "@angular/router"
import {AppComponent} from "./app.component"
import {Page1Component} from "./page1/page1.component"
import {Page2Component} from "./page2/page2.component"

export const ROUTES: Routes = [
  {path: '', component: Page1Component}, //main page
  {path: 'page2', component: Page2Component}, //inner pages
  {path: 'page2/:id', component: Page2Component} //inner pages
]
