import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isFlyoutOpen = false;

  @ViewChild('flyOutMenu') flyOutMenu!: ElementRef;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (
      this.isFlyoutOpen &&
      !this.flyOutMenu.nativeElement.contains(event.target)
    ) {
      // clicked outside => close dropdown list
      this.isFlyoutOpen = false;
    }
  }
}
