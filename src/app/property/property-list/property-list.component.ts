import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  sellRent = 1;
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  properties: Array<IPropertyBase> = [];
  updatedProperties: Array<IPropertyBase> = [];

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      (data) => {
        console.log(data);
        data.forEach((element) => {
          if (element.SellRent == this.sellRent) {
            this.updatedProperties.push(element);
          }
        });

        var localProp = this.housingService.getLocalProperties(this.sellRent);
        localProp.forEach((element) => {
          this.updatedProperties.push(element);
        });

        this.properties = this.updatedProperties;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
