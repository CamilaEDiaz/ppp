import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIpsComponent } from './add-ips.component';

describe('AddIpsComponent', () => {
  let component: AddIpsComponent;
  let fixture: ComponentFixture<AddIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
