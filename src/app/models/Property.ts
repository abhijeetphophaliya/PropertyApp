import { IPropertyBase } from "./IPropertyBase";
import { Photo } from "./Photo";

export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  FType: string;
  Price: number;
  BHK: number;
  BuiltArea: number;
  City: string;
  RTM: boolean;
  Image?: string;
  propertyTypeId!: number;
  propertyType!: string;
  furnishingTypeId!: number;
  furnishingType!: string;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  CityId!: number;
  floorNo?: string;
  totalFloors?: string;
  Age?: string;
  mainEntrance?: string;
  security?: number;
  Gated?: boolean;
  Maintenance?: number;
  estPossessionOn?: string;
  Photo?: string;
  Description?: string;
  photos?: Photo[];
}
