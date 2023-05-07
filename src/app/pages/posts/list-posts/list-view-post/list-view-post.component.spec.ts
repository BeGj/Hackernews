import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPostComponent } from './list-view-post.component';

describe('ListViewPostComponent', () => {
  let component: ListViewPostComponent;
  let fixture: ComponentFixture<ListViewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListViewPostComponent],
    });
    fixture = TestBed.createComponent(ListViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
