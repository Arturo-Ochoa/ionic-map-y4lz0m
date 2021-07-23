import { Component } from '@angular/core';
import * as L from "leaflet";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: L.Map

  constructor() {}
  
  ngOnInit(){
    this.map = L.map('map', {
      center: [40, -5],
		zoom: 3,
      renderer: L.canvas()
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.Datos: Universidad Johns Hopkins (JHU)',
    }).addTo(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
