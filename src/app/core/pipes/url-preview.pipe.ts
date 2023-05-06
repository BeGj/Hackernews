import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPreview',
  standalone: true,
  pure: true,
})
export class UrlPreviewPipe implements PipeTransform {
  transform(url: string): string {
    try {
      const domain = new URL(url);
      return domain.hostname;
    } catch (error) {
      return '';
    }
  }
}
