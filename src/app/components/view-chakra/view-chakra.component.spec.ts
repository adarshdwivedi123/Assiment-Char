import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChakraComponent } from './view-chakra.component';

describe('ViewChakraComponent', () => {
  let component: ViewChakraComponent;
  let fixture: ComponentFixture<ViewChakraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChakraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChakraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
