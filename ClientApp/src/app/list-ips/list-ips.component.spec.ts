import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIpsComponent } from './list-ips.component';

describe('ListIpsComponent', () => {
  let component: ListIpsComponent;
  let fixture: ComponentFixture<ListIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
