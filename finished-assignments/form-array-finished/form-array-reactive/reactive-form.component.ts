import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Gender } from './customer.model';

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormsComponent implements OnInit{
    // used in template
    Gender = Gender;
    skillLevels: string[] = ["Student", "Junior", "Medior", "Senior", "CodeSmith", "Champion"];

    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            username: [''],
            firstName: ['Default'],
            lastName: [''],
            phoneNumber: [''],
            email: [''],
            gender: [''],
            skillLevel: [''],
            addresses: this.formBuilder.array([
                this.formBuilder.group({
                    line: [''],
                    country: ['']
                })
            ])
        });
    }

    public addAddress(): void {
        let formArray = this.formGroup.get('addresses') as FormArray;
        let newAddress = this.formBuilder.group({
            line: [''],
            country: ['']
        });
        formArray.push(newAddress);
    }

    public deleteAddress(index: number): void {
        let formArray = this.formGroup.get('addresses') as FormArray;
        formArray.removeAt(index);
    }
}