import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExpertComponent } from './info-expert.component';

describe('InfoExpertComponent', () => {
  let component: InfoExpertComponent;
  let fixture: ComponentFixture<InfoExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
