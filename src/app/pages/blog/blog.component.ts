import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  PenSquare,
  Calendar,
  Clock,
  Tag,
  Search,
  ExternalLink,
} from 'lucide-angular';
import {
  MediumPost,
  MediumService,
} from '../../services/medium/medium.service';

type ViewPost = MediumPost & {
  readingTime: number;
  excerpt: string;
};

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  private readonly medium = inject(MediumService);

  PenSquare = PenSquare;
  Calendar = Calendar;
  Clock = Clock;
  TagIcon = Tag;
  Search = Search;
  ExternalLink = ExternalLink;

  loading = true;
  allPosts: ViewPost[] = [];
  posts: ViewPost[] = [];

  categories: string[] = ['All'];
  selectedCategory = 'All';
  query = '';
  pageSize = 6;
  showCount = this.pageSize;

  get skeletonArray() {
    return Array(this.pageSize).fill(0);
  }

  ngOnInit() {
    this.medium.getPosts().subscribe((items) => {
      const mapped = items.map((p) => ({
        ...p,
        readingTime: this.calcReadingTime(p.content),
        excerpt: this.makeExcerpt(p.content, 180),
      }));
      this.allPosts = mapped;

      const set = new Set<string>();
      mapped.forEach((p) => p.categories?.forEach((c) => set.add(c)));
      this.categories = [
        'All',
        ...Array.from(set).sort((a, b) => a.localeCompare(b)),
      ];

      this.applyFilters();
      this.loading = false;
    });
  }

  applyFilters() {
    const q = this.query.trim().toLowerCase();
    const filtered = this.allPosts.filter((p) => {
      const matchCategory =
        this.selectedCategory === 'All' ||
        p.categories?.includes(this.selectedCategory);
      const matchQuery = !q || p.title.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });

    this.showCount = this.pageSize;
    this.posts = filtered.slice(0, this.showCount);
  }

  loadMore() {
    this.showCount += this.pageSize;
    const filtered = this.filteredAll();
    this.posts = filtered.slice(0, this.showCount);
  }

  filteredAll(): ViewPost[] {
    const q = this.query.trim().toLowerCase();
    return this.allPosts.filter((p) => {
      const matchCategory =
        this.selectedCategory === 'All' ||
        p.categories?.includes(this.selectedCategory);
      const matchQuery = !q || p.title.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }

  private stripHtml(html: string): string {
    return (html || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private makeExcerpt(html: string, max = 160): string {
    const text = this.stripHtml(html);
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut) + '…';
  }

  private calcReadingTime(html: string, wpm = 200): number {
    const words = this.stripHtml(html).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / wpm));
  }
}
