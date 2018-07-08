import { MEAT_API } from '../app.api'
import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class RestaurantsService {

    constructor (private http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map((res: Response) => res.json())
        .catch(ErrorHandler.handleError)
    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map((res: Response) => res.json())
        .catch(ErrorHandler.handleError)
    }

    getRestaurantReviews(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map((res: Response) => res.json())
        .catch(ErrorHandler.handleError)
    }

    getRestaurantMenu(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map((res: Response) => res.json())
        .catch(ErrorHandler.handleError)
    }
}
