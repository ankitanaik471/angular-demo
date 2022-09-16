import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomListComponent } from './user-custom-list.component';

describe('UserCustomListComponent', () => {
  let component: UserCustomListComponent;
  let fixture: ComponentFixture<UserCustomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
