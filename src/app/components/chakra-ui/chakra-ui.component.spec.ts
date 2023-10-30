import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakraUIComponent } from './chakra-ui.component';

describe('ChakraUIComponent', () => {
  let component: ChakraUIComponent;
  let fixture: ComponentFixture<ChakraUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChakraUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakraUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
