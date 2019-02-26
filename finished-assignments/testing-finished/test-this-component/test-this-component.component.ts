import { Component, OnInit } from '@angular/core';
import { Address } from './address.model';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-test-this-component',
  templateUrl: './test-this-component.component.html',
  styleUrls: ['./test-this-component.component.css']
})
export class TestThisComponentComponent implements OnInit {
  private name: string;

  public list: {property: string}[];

  private address: Address;

  constructor() {
    this.address = {
      street: 'new street',
      city: 'Utrecht',
      postcode: '3511 BK',
      houseNumber: 14
    };
  }

  ngOnInit() {
  }

  public add(n1: number, n2: number): number {
    return n1 + n2;
  }

  public setPrivateName(name: string): void {
    this.name = name;
  }

  public getPrivateName(): string {
    return this.name;
  }

  public addToList(propertyName: string) {
    this.list.push({property: propertyName});
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address) {
    this.address = address;
  }

  public isAbstractControlValid(control: AbstractControl) {
    const isValid = control.dirty && control.valid;
    const isCorrect = control.value <= 22.91;

    return isValid && isCorrect;
  }

  public constructDate(dayOfMonth: number, month: number, year: number): Date {
    const date = new Date();
    date.setDate(dayOfMonth);
    date.setMonth(month);
    date.setFullYear(year);
    return date;
  }
}
