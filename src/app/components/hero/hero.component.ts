import { NgFor } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.fromTo(
      '#hero-title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        '#hero-subtitle',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        '#hero-button',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      )
      .add(() => this.animatePortfolioText(), '+=0.5');
  }

  private animatePortfolioText() {
    const letters = document.querySelectorAll('.portfolio-letter');
    gsap.fromTo(
      letters,
      { y: 0 },
      {
        y: -10,
        duration: 0.3,
        ease: 'power1.out',
        stagger: { amount: 0.6, from: 'start', repeat: 1, yoyo: true },
      }
    );
  }
}
