import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedrivenformComponent } from './reactivedrivenform.component';

describe('ReactivedrivenformComponent', () => {
  let component: ReactivedrivenformComponent;
  let fixture: ComponentFixture<ReactivedrivenformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivedrivenformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
