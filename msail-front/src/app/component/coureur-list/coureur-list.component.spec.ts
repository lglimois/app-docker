import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureurListComponent } from './coureur-list.component';

describe('CoureurListComponent', () => {
  let component: CoureurListComponent;
  let fixture: ComponentFixture<CoureurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoureurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
