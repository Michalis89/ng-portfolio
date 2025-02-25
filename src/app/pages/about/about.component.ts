import { NgFor } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;
  @ViewChild('educationSection', { static: false })
  educationSection!: ElementRef;
  @ViewChild('certificatesSection', { static: false })
  certificatesSection!: ElementRef;
  @ViewChild('experienceSection', { static: false })
  experienceSection!: ElementRef;
  @ViewChild('interestsSection', { static: false })
  interestsSection!: ElementRef;

  personalInfo = [
    { icon: 'mail', label: 'Email', value: 'mouzakitis.m89@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '+30 6982961433' },
    { icon: 'map-pin', label: 'City', value: 'Evia' },
    { icon: 'home', label: 'Address', value: 'Gavalas, Aliveri' },
    { icon: 'calendar', label: 'Date of Birth', value: '18/08/1989' },
  ];

  techStack = [
    {
      category: 'Frontend Development',
      skills: 'HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Next.js',
    },
    {
      category: 'State Management & Data Fetching',
      skills: 'Redux, Redux Toolkit, RTK Query, NgRx, RxJS',
    },
    {
      category: 'Styling & UI Libraries',
      skills: 'Tailwind CSS, Bootstrap, Angular Material',
    },
    {
      category: 'Testing & Quality Assurance',
      skills:
        'Jest (Unit Testing), Cypress (End-to-End Testing), Stryker (Mutation Testing)',
    },
    {
      category: 'CMS & Backend Technologies',
      skills: 'Magnolia CMS, Firebase, Node.js',
    },
    { category: 'Version Control & DevOps', skills: 'Git, GitHub, GitLab' },
  ];

  certificates = [
    {
      year: '2025 - TBD',
      title: 'Next.js 15 & React - The Complete Guide',
      provider: 'Udemy',
      description:
        'Learn NextJS 15 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!',
    },
    {
      year: '2025 - Ongoing',
      title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
      provider: 'Udemy',
      description:
        'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
    },
    {
      year: '2020',
      title: 'Certified Associate Developer Magnolia CMS',
      provider: 'Magnolia',
      description:
        'Certified Associate Developer in Magnolia CMS, proficient in leveraging its modular architecture for efficient website development. Skilled in content management and workflow optimization, I bring expertise in delivering tailored digital experiences to drive business success.',
    },
    {
      year: '2019',
      title: 'Angular - The Complete Guide',
      provider: 'Udemy',
      description:
        'Unlock the full potential of Angular with "Angular - The Complete Guide" on Udemy. Led by expert instructor Maximilian Schwarzmüller, thmis course provides a coprehensive journey from basics to advanced concepts, equipping you to build robust web applications with confidence.',
    },
    {
      year: '2018',
      title: 'React',
      provider: 'CodeHub',
      description:
        'The React Code. Learn program is designed to equip client-side web developers with the knowledge required to effectively adopt and use React. The program covers basic React concepts such as React syntax, and creating components, as well as architectural React concepts and best practices.',
    },
    {
      year: '2016',
      title: 'Certification Of Web Development',
      provider: 'EKPA',
      description:
        'The certification aims to provide a comprehensive learning package in web development, covering web design, front-end development, user experience design, and graphic design. The program includes courses such as HTML, JS, CSS, AJAX, Dreamweaver, Bootstrap, Photoshop, InDesign, and Joomla.',
    },
  ];

  experience = [
    {
      year: '2025 - present',
      title: 'Front-End Engineer',
      company: 'ARHS Developments',
      description:
        'Develop and maintain web applications for EPO (European Patent Office).',
      responsibilities: [
        'Develop new features using ReactJS and NextJS.',
        'Using Redux Toolkit Query (`fetchBaseQuery`) for efficient data fetching and caching.',
        'Managing global application state with Redux.',
        'Ensuring application stability and robustness by writing unit tests with Jest and conducting end-to-end tests with Cypress.',
      ],
    },
    {
      year: '2019 - 2024',
      title: 'Front-End Engineer',
      company: 'ARHS Developments',
      description:
        'Develop and maintain web applications for Proximus (client of Arhs) a huge telecommunications organization.',
      responsibilities: [
        'Develop new features using Angular and Magnolia CMS.',
        'Using RxJS for handling asynchronous operations and data streams in our web applications.',
        'Using NGXS for managing application state.',
        'Using Jest for Unit Testing, Stryker for Mutation Testing, and Cypress for End-to-End Testing.',
        'Provide support and guidance to other team members for Magnolia CMS.',
      ],
    },
    {
      year: '2018 - 2019',
      title: 'Front-End Developer',
      company: 'Agroknow',
      description:
        'Forecast trends in food safety incidents. Developed risk prevention systems.',
      responsibilities: [
        'Develop new tools for researchers with HTML/CSS/JavaScript.',
        "We are using Drupal CMS for researchers' websites.",
        'We are using ReactJS to develop applications for researchers.',
        'I helped with a rewrite of the main product FOODAKAI with ReactJs.',
        'Close communication with the back-end team.',
      ],
    },
    {
      year: '2016 - 2018',
      title: 'Junior Front-End Developer',
      company: 'Contadd',
      description:
        'Contadd is an innovative digital platform that brings advertisers, publishers and audiences together.',
      responsibilities: [
        'Using jQuery and CSS on a prototype to handle smooth and responsive animations.',
        'Rewrite the prototype using the G-SAP animation library.',
        'Use of Cloudflare and DoubleClick platforms for the analytics.',
      ],
    },
  ];

  interests = [
    { title: 'Video Games' },
    { title: 'D&D' },
    { title: 'Movies' },
    { title: 'TV series' },
    { title: 'Outdoor Activities with my Dog' },
  ];

  ngAfterViewInit() {
    gsap.from(this.aboutSection.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.about-item', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    this.animateSection(this.educationSection);
    this.animateSection(this.certificatesSection);
    this.animateSection(this.experienceSection);
    this.animateSection(this.interestsSection);
  }

  private animateSection(section: ElementRef) {
    gsap.fromTo(
      section.nativeElement,
      { autoAlpha: 0, y: 50 }, // Αρχική κατάσταση (κρυμμένο και λίγο χαμηλότερα)
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section.nativeElement,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
          scrub: true, // Κάνει την κίνηση πιο φυσική
        },
      }
    );
  }
}
