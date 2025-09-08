import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  content: string;
  thumbnail: string | null;
};

@Injectable({ providedIn: 'root' })
export class MediumService {
  private readonly http = inject(HttpClient);
  getPosts() {
    return this.http.get<{ items: MediumPost[] }>('/api/medium').pipe(
      map((r) => r.items ?? []),
      catchError(() => of([]))
    );
  }
}
