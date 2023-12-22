import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  acceso: string | null = null; 

  ngOnInit() {
    this.acceso = localStorage.getItem('ACC');
    console.log(this.acceso);
  }

  BotonSesion() {
    if (this.acceso === 'true') {
      this.acceso = 'false';
      localStorage.setItem('ACC', 'false');
    } else {
      this.acceso = 'true';
      localStorage.setItem('ACC', 'true');
    }
    location.reload();
  }
}
