import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

// Interface pour un marker
class Marker {
  lat: Number;
  lng: Number;
}


@Component({
  selector: 'app-users-map',
  templateUrl: './users-map.component.html',
  styleUrls: ['./users-map.component.scss']
})
export class UsersMapComponent implements OnInit {
  lat: Number = 43.3440915;
  lng: Number = 5.4292788;

  // On va créer un tableau de markers
  // qui contiendra chaque lat/lng de type Number
  // (agm-marker ne supporte pas d'autres types)
  markers: Marker[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data
      .getUsers()
      .subscribe((users: any) => {
        users.forEach(user => {
          // Pour chaque utilisateur on prépare un objet contenant
          // les positions latitude ET longitude
          const marker = {
            name: user.name,
            lat: Number(user.address.geo.lat),
            lng: Number(user.address.geo.lng),
          };
          // On push chaque marker dans notre tableau de markers
          this.markers.push(marker);
        });
        console.log('tableau de markers', this.markers);
      });
  }

}
