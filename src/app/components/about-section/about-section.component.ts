import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LucideAngularModule, Briefcase } from 'lucide-angular';
import { IconService } from '../../services/icon.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [NgFor, NgIf, LucideAngularModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent implements OnInit, AfterViewInit {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() data!: any[];
  @Input() isList!: boolean;

  readonly icons: Record<string, any> = {};
  Calendar: any;

  constructor(
    private readonly el: ElementRef,
    private readonly iconService: IconService
  ) {}

  ngOnInit() {
    this.Calendar = this.iconService.getIcon('calendar');
    this.icons['education'] = this.iconService.getIcon('education');
    this.icons['certificates'] = this.iconService.getIcon('certificates');
    this.icons['experience'] = this.iconService.getIcon('experience');
    this.icons['interests'] = this.iconService.getIcon('interests');
  }

  isInterests(): boolean {
    return (
      this.title === 'Interests' &&
      Array.isArray(this.data) &&
      this.data.length > 0 &&
      this.data[0]?.description &&
      this.data[0]?.interestsList
    );
  }

  ngAfterViewInit() {
    gsap.fromTo(
      this.el.nativeElement,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 85%',
          end: 'top 10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  getIconForSection(): any {
    return this.icons[this.title.toLowerCase()] || Briefcase;
  }
}
