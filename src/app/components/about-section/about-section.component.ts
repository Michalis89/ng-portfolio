import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LucideAngularModule,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Gamepad2,
} from 'lucide-angular';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [NgFor, NgIf, LucideAngularModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent implements AfterViewInit {
  readonly Calendar = Calendar;
  readonly icons = {
    education: GraduationCap,
    certificates: Award,
    experience: Briefcase,
    interests: Gamepad2,
  };
  @Input() title!: string;
  @Input() icon!: string;
  @Input() data!: any[];
  @Input() isList!: boolean;

  isInterests(): boolean {
    return (
      this.title === 'Interests' &&
      Array.isArray(this.data) &&
      this.data.length > 0 &&
      this.data[0]?.description &&
      this.data[0]?.interestsList
    );
  }

  constructor(private readonly el: ElementRef) {}

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
    return (
      this.icons[this.title.toLowerCase() as keyof typeof this.icons] ||
      Briefcase
    );
  }
}
