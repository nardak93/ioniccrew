import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicDevPage } from './ionic-dev.page';

describe('IonicDevPage', () => {
  let component: IonicDevPage;
  let fixture: ComponentFixture<IonicDevPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
