import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfvalidComponent } from './tdfvalid.component';

describe('TdfvalidComponent', () => {
  let component: TdfvalidComponent;
  let fixture: ComponentFixture<TdfvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfvalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
