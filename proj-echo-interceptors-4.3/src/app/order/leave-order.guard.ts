import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { OrderComponent } from "./order.component"

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {


  canDeactivate(
    orderComponent: OrderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    if (!orderComponent.isOrderCompleted()){
      return window.confirm('Se sair agora, os dados serão perdidos.\nDeseja sair?')
    }
    else {
      return true
    }
  }


}
