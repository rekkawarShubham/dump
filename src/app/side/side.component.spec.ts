import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { SideComponent } from './side.component';

fdescribe('SideComponent', () => {
  let component: SideComponent;
  let fixture: ComponentFixture<SideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called on hello button click', async(() => {
    spyOn(component, 'hello');
 
    let button = fixture.debugElement.nativeElement.querySelector('');
    button.click();
 
    fixture.whenStable().then(() => {
    expect(component.hello).toHaveBeenCalled();
   })
 }));

 it('should called on hello1 button click', async(() => {
  spyOn(component, 'hello1');

  let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

  fixture.whenStable().then(() => {
  expect(component.hello1).toHaveBeenCalled();
 })
}));

});
