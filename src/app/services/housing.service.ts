import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../models/IPropertyBase';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(public http: HttpClient) {}

  getLocalProperties(sellRent?: number): Property[] {
    let updatedProperties: Array<Property> = [];
    const localProp = JSON.parse(localStorage.getItem('newProp'));
    if (localProp) {
      localProp.forEach((element: Property) => {
        if (sellRent) {
          if (element.SellRent == sellRent) {
            updatedProperties.push(element);
          }
        } else {
          updatedProperties.push(element);
        }
      });
    }
    return updatedProperties;
  }

  getAllProperties(sellRent: number): Observable<Property[]> {
    return this.http
      .get('data/properties.json')
      .pipe(map((data) => data as Property[]));
  }

  addProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
      localStorage.setItem('newProp', JSON.stringify(newProp));
    } else {
      localStorage.setItem('newProp', JSON.stringify(newProp));
    }
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
