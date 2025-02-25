import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Globe, LucideAngularModule } from 'lucide-angular';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, NgFor, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  readonly Github = Github;
  readonly Globe = Globe;

  categories = ['All', 'Web', 'Mobile', 'Open Source', 'Games'];
  selectedCategory = 'All';

  projects = [
    {
      title: 'Mythic Codex',
      description: 'A D&D Character Builder with advanced features.',
      image: 'assets/projects/mythic-codex.jpg',
      stack: ['Angular', 'Tailwind', 'Supabase'],
      live: 'https://mythic-codex.vercel.app',
      code: 'https://github.com/your-username/mythic-codex',
      category: 'Web',
    },
    {
      title: 'Platinum Hunters GR',
      description: 'A hunting game guide website for Greek players.',
      image: 'assets/projects/platinum-hunters.jpg',
      stack: ['Next.js', 'Tailwind', 'Firebase'],
      live: 'https://platinum-hunters-gr.vercel.app',
      code: 'https://github.com/your-username/platinum-hunters',
      category: 'Games',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio built with Angular & GSAP.',
      image: 'assets/projects/portfolio.jpg',
      stack: ['Angular', 'GSAP', 'Tailwind'],
      live: 'https://yourportfolio.com',
      code: 'https://github.com/your-username/portfolio',
      category: 'Web',
    },
  ];

  filteredProjects = [...this.projects];

  ngOnInit() {
    this.animateProjects();
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    this.filteredProjects =
      category === 'All'
        ? [...this.projects]
        : this.projects.filter((project) => project.category === category);
  }

  animateProjects() {
    gsap.from('.grid > div', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.grid',
        start: 'top 90%',
        end: 'top 10%',
        toggleActions: 'play none none reverse',
      },
    });
  }
}
