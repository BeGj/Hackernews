import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewStoryComponent } from './list-view-story.component';

describe('ListViewStoryComponent', () => {
  let component: ListViewStoryComponent;
  let fixture: ComponentFixture<ListViewStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListViewStoryComponent]
    });
    fixture = TestBed.createComponent(ListViewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
