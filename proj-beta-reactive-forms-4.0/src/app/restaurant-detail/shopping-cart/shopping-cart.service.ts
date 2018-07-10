import {Injectable} from "@angular/core";
import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'
import {NotificationService} from "../../shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = []

  constructor(private notificationService: NotificationService) {
  }

  clear() {
    this.items = []
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem);
    }
    else {
      this.items.push(new CartItem(item))
    }
    this.notificationService.notify('1 item adicionado - ' + item.name)
  }

  increaseQty(item: CartItem) {
      item.quantity += 1
  }

  decreaseQty(item: CartItem) {
      if (item.quantity > 1) {
          item.quantity -= 1;
      }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationService.notify('Item removido - ' + item.menuItem.name)
  }

  total(): number {
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev + value, 0)
  }




}
