import { AbstractControl, FormArray } from '@angular/forms';

export function addressesValidator(control: AbstractControl): {[key: string]: any} | null {
    const formArray = control as FormArray;
    if(formArray.length < 2) {
        return {'Wrong-length': formArray.length};
    }

    for(let i = 0; i < formArray.length; i++) {
        const currentPostcode: string = formArray.get(''+i).get('postcode').value;
        for(let j = 0; j < formArray.length; j++) {
            if(currentPostcode === formArray.get(''+j).get('postcode').value) {
                return {'Double-postcode': currentPostcode};
            }
        }
    }
    
    return null;
}