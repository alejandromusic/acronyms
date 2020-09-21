import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'acron'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('acronyms');
  });

});

describe('branch coverage', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should have two rows after searching PTES', ()=> {

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const component = compiled.querySelector('input');
    const spy1 = spyOn(component, 'applyFilter');
    component.value = 'PTES';
    const eventMock = {code: 'Escape'};
    component.keyEvent(eventMock);

    expect(spy1).toHaveBeenCalledWith(eventMock);
    expect(compiled.querySelector('table').rows.length).toEqual(2);
  });

});
