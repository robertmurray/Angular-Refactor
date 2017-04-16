import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFavoritesComponent } from './display-favorites.component';

describe('DisplayFavoritesComponent', () => {
  let component: DisplayFavoritesComponent;
  let fixture: ComponentFixture<DisplayFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
