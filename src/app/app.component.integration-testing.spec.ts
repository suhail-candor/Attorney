import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
describe('AppComponent Integration', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as page heading`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Case Forms');
  }));
  it('should render Form List', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.form-list li'));
    expect(de.length).toBeGreaterThanOrEqual(component.listArray.length);
  });
  it('should render Forms', () => {
    fixture.detectChanges();
    component.ngOnInit();
    const de = fixture.debugElement.queryAll(By.css('.forms > div'));
    expect(de.length).toBeGreaterThan(0);
  });
});
