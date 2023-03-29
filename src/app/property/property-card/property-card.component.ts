import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {

  @Input() property : IPropertyBase | undefined;
  @Input() hideIcons: boolean;

  constructor() {}


  ngOnInit() {}
}
