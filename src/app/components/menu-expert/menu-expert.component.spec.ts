import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExpertComponent } from './menu-expert.component';

describe('MenuExpertComponent', () => {
  let component: MenuExpertComponent;
  let fixture: ComponentFixture<MenuExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
