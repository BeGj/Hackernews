import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnStoryListView } from 'src/app/core/models/hn-items.model';
import { UrlPreviewPipe } from '../../../../core/pipes/url-preview.pipe';
import { RouterModule } from '@angular/router';
import { SavedStoriesService } from 'src/app/core/services/saved-stories.service';

@Component({
  selector: 'app-list-view-story',
  standalone: true,
  templateUrl: './list-view-story.component.html',
  styleUrls: ['./list-view-story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UrlPreviewPipe, RouterModule],
})
export class ListViewStoryComponent {
  @Input({ required: true }) story!: HnStoryListView;
  @Input() index?: number;

  constructor(protected savedStoriesService: SavedStoriesService) {}
}
