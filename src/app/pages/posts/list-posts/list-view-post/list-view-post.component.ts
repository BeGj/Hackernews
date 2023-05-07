import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HnPostJobWithSaved } from 'src/app/core/models/hn-items.model';
import { UrlPreviewPipe } from '../../../../core/pipes/url-preview.pipe';
import { RouterModule } from '@angular/router';
import { SavedPostsService } from 'src/app/core/services/saved-posts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-view-post',
  standalone: true,
  templateUrl: './list-view-post.component.html',
  styleUrls: ['./list-view-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UrlPreviewPipe, RouterModule],
})
export class ListViewPostComponent {
  @Input({ required: true }) post!: HnPostJobWithSaved;
  @Input() index?: number;

  constructor(
    protected savedPostsService: SavedPostsService,
    protected sanitizer: DomSanitizer
  ) {}
}
