import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [AppComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
      }));
    it('should call showform function and if checked it should add form list', () => {
        const event  = {
            target: {
                checked: true,
                'id': '6',
                'name': 'Form 6'
            }
        };
        const selectedFormPreviousLength =  component.selectedForm.length;
        component.showform(event);
        expect(component.selectedForm.length).toBeGreaterThan(selectedFormPreviousLength);
    });
    it('should call showform function and if unchecked it should remove form list', () => {
        const event  = {
            target: {
                checked: false,
                id: 6,
                name: 'Form 6'
            }
        };
        const selectedFormPreviousLength =  component.selectedForm.length;
        component.showform(event);
        expect(component.selectedForm.length).toBeLessThanOrEqual(selectedFormPreviousLength);
    });
    it('should call requiredForm function in ngOnInit', () => {
        spyOn(component , 'requiredForm').and.callThrough();
        component.ngOnInit();
        expect(component.requiredForm).toHaveBeenCalled();
    });
});
