import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number | undefined;
  public mainPhotoUrl: string = null;
  property = new Property();
  sellRent = 1;
  properties: Array<Property> = [];
  updatedProperties: Array<Property> = [];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      (data) => {
        data.forEach((element) => {
          this.updatedProperties.push(element);
        });

        var localProp = this.housingService.getLocalProperties();
        localProp.forEach((element) => {
          this.updatedProperties.push(element);
        });

        this.property = this.updatedProperties.find(
          (x) => x.Id === this.propertyId
        );
      },
      (error) => {
        console.log(error);
      }
    );




    this.galleryOptions = [
      {
        width: '100%',
        height: '470px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/prop1.jpg',
        medium: 'assets/images/prop1.jpg',
        big: 'assets/images/prop1.jpg'
      },
      {
        small: 'assets/images/prop2.jpg',
        medium: 'assets/images/prop2.jpg',
        big: 'assets/images/prop2.jpg'
      },
      {
        small: 'assets/images/prop3.jpg',
        medium: 'assets/images/prop3.jpg',
        big: 'assets/images/prop3.jpg'
      },{
        small: 'assets/images/prop4.jpg',
        medium: 'assets/images/prop4.jpg',
        big: 'assets/images/prop4.jpg'
      }
    ];

  }

  GoBackFromDetail() {
    this.router.navigate(['/']);
  }
}
