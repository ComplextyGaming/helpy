import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailexpertComponent } from './detailexpert.component';

describe('DetailexpertComponent', () => {
  let component: DetailexpertComponent;
  let fixture: ComponentFixture<DetailexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailexpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
