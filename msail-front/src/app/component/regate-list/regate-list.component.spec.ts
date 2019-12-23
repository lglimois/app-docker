import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegateListComponent } from './regate-list.component';

describe('RegateListComponent', () => {
  let component: RegateListComponent;
  let fixture: ComponentFixture<RegateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
