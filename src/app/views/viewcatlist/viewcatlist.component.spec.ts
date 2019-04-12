import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatlistComponent } from './viewcatlist.component';

describe('ViewcatlistComponent', () => {
  let component: ViewcatlistComponent;
  let fixture: ComponentFixture<ViewcatlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcatlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
