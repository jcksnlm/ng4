import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../commom/radio/radio-option.model'
import {OrderService} from "./order.service"
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    paymentsOptions: RadioOption[] = [
        {label: 'Dinheiro', value: 'MON'},
        {label: 'Cartão de débito', value: 'DEB'},
        {label: 'Cartão refeição', value: 'REF'},
    ]

    delivery: number = 8

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number {
      return this.orderService.itemsValue()
  }


  cartItems(): CartItem[] {
      this.updateDelivery()
      return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
      this.updateDelivery()
      this.orderService.increaseQty(item)
  }

  decreaseQty (item: CartItem) {
      this.updateDelivery()
      this.orderService.decreaseQty(item)
  }

  remove (item: CartItem) {
      this.updateDelivery()
      this.orderService.remove(item);
  }

  updateDelivery() {
      let value = this.itemsValue()
      if (value) {
          this.delivery = 8 + (value * 0.06)
      }
      else {
          this.delivery = 0
      }
  }

  checkout(order: Order) {
      order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkout(order).subscribe((response: string) => {
          this.router.navigate(['/order-summary'])
          this.orderService.clear()

      })
  }

}
