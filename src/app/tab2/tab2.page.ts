import { Component } from '@angular/core';
import * as L from "leaflet";



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map1: L.Map

  constructor() { }

  ngOnInit() {
    this.map1 = L.map('map1',
      {
        center: [25.3791924, 55.4765436],
        zoom: 15,
        renderer: L.canvas()
      })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.Datos: Universidad Johns Hopkins (JHU)',
      }).addTo(this.map1);


    L.circle({ lat: 25.3791924, lng: 55.4765436 }, {
      color: 'steelblue',
      radius: 500,
      fillColor: 'steelblue',
      opacity: 0.5
    }).addTo(this.map1)

    setTimeout(() => {
      this.map1.invalidateSize();
    }, 0);
  }

  /* covidMundo = L.geoJSON(covid, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, MarkerOptions);
    }
  });
  map.addLayer(covidMundo);

var MarkerOptions = {
  fillColor: "#FF4000",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

function getRadius(r) {
  return r >= 100000 ? 25 :
    r >= 10000 ? 15 :
      r >= 5000 ? 7 :
        r >= 1000 ? 3 :
          3;
};

function estilo_covid(feature) {
  return {
    radius: getRadius(feature.properties.Confirmed),
  };
};
function popup_covid(feature, layer) {
  layer.bindPopup("<div style=text-align:center><h3>" + feature.properties.Country_Region +
    "<h3></div><hr><table><tr><td>Confirmed: " + feature.properties.Confirmed +
    "</td></tr><tr><td>Deaths: " + feature.properties.Deaths +
    "</td></tr><tr><td>Recovered: " + feature.properties.Recovered +
    "</td></tr></table>",
    { minWidth: 150, maxWidth: 200 });
};

var covidMundo = L.(covid, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, MarkerOptions);
  },
  style: estilo_covid,
  onEachFeature: popup_covid
});
map1.addLayer(covidMundo);


//Leyenda-----------------------------------------------------------

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend');
  var grades = [1000, 5000, 10000, 100000];
  var labels = ['<strong>Número de afectados</strong>'];
  var categories = ['< 5000', '5000-10000', '10000-100000', '>100000'];

  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];//*0.5;
    labels.push(
      '<i class="circlepadding" style="width: ' + Math.max(8, (7 - 2.2 * getRadius(grade))) + 'px;"></i> <i style="background: #FF4000; width: ' + getRadius(grade) * 2 + 'px; height: ' + getRadius(grade) * 2 + 'px; border-radius: 50%; margin-top: ' + Math.max(0, (9 - getRadius(grade))) + 'px;"></i><i class="circlepadding" style="width: ' + Math.max(2, (25 - 2 * getRadius(grade))) + 'px;"></i> ' + categories[i]);
  }
  div.innerHTML = labels.join('<br>');
  return div;
};
legend.addTo(map);

// Insertando un título en el mapa---------------------------------

var title = L.control();

title.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info');
  div.innerHTML +=
    '<h2>COVID-19</h2>Número de afectador por país.(23-04-2020)';
  return div;
};

title.addTo(map1);
 
 */
}
