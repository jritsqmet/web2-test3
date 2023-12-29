import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let accesoAdmin=localStorage.getItem('ACCADMIN')
  if(accesoAdmin==="true") {
    return true
  }
  else {
    return false
  }
};
