import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { OrderService } from './order/order.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './commom/input/input.component';
import { RadioComponent } from './commom/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostComponent } from './order/delivery-cost/delivery-cost.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './commom/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
