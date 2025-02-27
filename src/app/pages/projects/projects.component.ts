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

  categories = ['All', 'JavaScript', 'Angular', 'React', 'Next'];
  selectedCategory = 'All';

  projects = [
    {
      title: 'Mythic Codex',
      description:
        'Mythic Codex is a D&D character builder and campaign management tool designed for players and Dungeon Masters. It provides a digital character sheet, party and quest tracking, and tools for managing combat encounters.',
      image: './projects/mythic-codex.png',
      stack: ['Next.js', 'Tailwind', 'Supabase'],
      live: 'https://mythic-codex.vercel.app',
      code: 'https://github.com/Michalis89/Mythic-Codex',
      category: 'Next',
    },
    {
      title: 'Platinum Hunters GR',
      description:
        'Platinum Hunters GR – A Greek gaming community platform with trophy guides, gaming review, and user-driven content.',
      image: './projects/platinum-hunters.png',
      stack: ['Next.js', 'Tailwind', 'Supabase'],
      live: 'https://platinum-hunters-gr.vercel.app',
      code: 'https://github.com/Michalis89/Platinum-Hunters-GR',
      category: 'Next',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio built with Angular & GSAP.',
      image: './projects/my-portfolio.png',
      stack: ['Angular', 'GSAP', 'Tailwind'],
      live: 'https://michail-mouzakitis-portfolio.vercel.app/',
      code: 'https://github.com/Michalis89/ng-portfolio',
      category: 'Angular',
    },
    {
      title: 'Covid 19 Tracker',
      description:
        'This is a Reactjs app for tracking the Covid 19 cases recoveries and deaths worldwide and per country.',
      image: './projects/covid19-tracker.png',
      stack: ['React', 'CSS'],
      live: 'https://covid-19-tracker-591a6.web.app/',
      code: 'https://github.com/Michalis89/covid-19-tracker',
      category: 'React',
    },
    {
      title: 'Interactive Quiz App',
      description:
        'This is a Neon-Themed Interactive Gaming Quiz App built using HTML, CSS, and JavaScript. The quiz dynamically fetches gaming-related questions from an API and features real-time score tracking, sound effects, and animations.',
      image: './projects/interactive-quiz.png',
      stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      live: 'https://portfolio-interactive-quiz-app.vercel.app/',
      code: 'https://github.com/Michalis89/Interactive-Quiz-App',
      category: 'JavaScript',
    },
    {
      title: 'Weather App',
      description:
        'Weatherio is a weather web application that provides users with current weather conditions, a 5-day forecast, and additional weather-related information for a selected location. It utilizes HTML, CSS, and JavaScript to create an interactive and visually appealing user interface.',
      image: './projects/weather-app.png',
      stack: ['HTML', 'CSS', 'JavaScript', 'Vite'],
      live: 'https://weather-app-js-sand.vercel.app/',
      code: 'https://github.com/Michalis89/weather-app-js',
      category: 'JavaScript',
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
