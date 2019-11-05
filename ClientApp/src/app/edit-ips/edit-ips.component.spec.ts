import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIpsComponent } from './edit-ips.component';

describe('EditIpsComponent', () => {
  let component: EditIpsComponent;
  let fixture: ComponentFixture<EditIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
