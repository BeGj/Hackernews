import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoriesComponent } from './list-stories.component';

describe('TopStoriesComponent', () => {
  let component: ListStoriesComponent;
  let fixture: ComponentFixture<ListStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListStoriesComponent],
    });
    fixture = TestBed.createComponent(ListStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
