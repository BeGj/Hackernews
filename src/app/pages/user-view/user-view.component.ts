import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { LetModule, PushModule } from '@ngrx/component';
import { Observable, ReplaySubject, concatMap, shareReplay, tap } from 'rxjs';
import { HnUser } from 'src/app/core/models/hn-items.model';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [CommonModule, LetModule, PushModule],
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserViewComponent {
  @Input({ required: true }) set userId(id: string) {
    this.userIdChanged$.next(id);
  }

  userIdChanged$ = new ReplaySubject<string>();
  user$: Observable<HnUser> = this.userIdChanged$.pipe(
    concatMap((id) => this.hn.fetchUser(id)),
    tap((user) => {
      this.title.setTitle(`User: ${user.id} (${user.karma})`);
    }),
    shareReplay()
  );

  constructor(
    private hn: HackernewsService,
    protected sanitizer: DomSanitizer,
    private title: Title
  ) {}
}
