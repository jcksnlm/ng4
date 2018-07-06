import { MEAT_API } from '../app.api'
import { Restaurant } from './restaurant/restaurant.model'
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantsService {

    constructor (private http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map((res: Response) => res.json())
    }
}
