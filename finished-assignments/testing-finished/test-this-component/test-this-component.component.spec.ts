import { TestThisComponentComponent } from './test-this-component.component';
import { AbstractControl, FormControl } from '@angular/forms';

describe('TestThisComponent', () => {
    let component: TestThisComponentComponent;

    beforeEach(() => {
        component = new TestThisComponentComponent();
    });

    it('should return the date for filled in fields', () => {
        const dayOfMonth = 18;
        const month = 12;
        const year = 2111;

        const result = component.constructDate(dayOfMonth, month, year);

        expect(result.getDate()).toEqual(dayOfMonth);
        expect(result.getMonth()).toEqual(month);
        expect(result.getFullYear()).toEqual(year);
    });
});