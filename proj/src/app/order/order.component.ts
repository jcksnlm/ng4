import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model'
import {OrderService} from "./order.service"
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup
    orderId: string

    paymentsOptions: RadioOption[] = [
        {label: 'Dinheiro', value: 'MON'},
        {label: 'Cartão de débito', value: 'DEB'},
        {label: 'Cartão refeição', value: 'REF'},
    ]

    delivery: number = 8

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    numberPattern = /^[0-9]*$/

  constructor(
      private orderService: OrderService,
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
      this.orderForm = this.formBuilder.group({
          name: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
          email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
          emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
          address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
          number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
          optional: this.formBuilder.control(''),
          paymentOption: this.formBuilder.control('', [Validators.required])
      },
      {validator: OrderComponent.emailsMatch})
  }

  static emailsMatch(group: AbstractControl): {[key:string]: boolean} {
      const email = group.get('email')
      const emailConfirmation = group.get('emailConfirmation')
      if (!email || !emailConfirmation) {
          return undefined
      }

      if (email.value !== emailConfirmation.value) {
          return {emailsNotMatch: true}
      }

      return undefined
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
      this.orderService.checkout(order)
      .do((orderId: string) => {
        this.orderId = orderId
      })
      .subscribe((response: string) => {
          this.router.navigate(['/order-summary'])
          this.orderService.clear()

      })
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined
  }

}
