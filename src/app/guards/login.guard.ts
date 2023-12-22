import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let acceso=localStorage.getItem('ACC')
  if(acceso) {
    return true
  }
  else {
    return false
  }
};
