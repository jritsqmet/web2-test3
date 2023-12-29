import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  accesoUser: string | null = null; 
  accesoAdmin: string | null = null; 
  acceso:any;
  ngOnInit() {
    this.accesoUser = localStorage.getItem('ACC');
    this.accesoAdmin = localStorage.getItem('ACCADMIN');
    console.log('Valor de AccesoUser:', this.accesoUser);
    console.log('Valor de accesoAdmin:', this.accesoAdmin);
  }

  BotonSesion() {
    if (this.accesoUser === 'true' || this.accesoAdmin === 'true') {
      localStorage.setItem('ACC', 'false');
      localStorage.setItem('ACCADMIN', 'false');
      this.accesoUser = 'false';
      this.accesoAdmin = 'false';
    } else {
      this.accesoUser = 'true';
    }
  }  
}
