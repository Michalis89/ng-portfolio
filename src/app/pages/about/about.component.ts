import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LucideAngularModule,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Layers,
  Server,
  GitBranch,
  ShieldCheck,
  Cpu,
  Linkedin,
  Github,
  Globe,
} from 'lucide-angular';
import { IconService } from '../../services/icon.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, AboutSectionComponent, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, AfterViewInit {
  User: any;
  Cpu: any;
  personalInfo: { label: string; value: string; icon: any }[] = [];
  socialLinks: { name: string; url: string; icon: any }[] = [];
  techStack: { category: string; skills: string; icon: any }[] = [];
  readonly icons: Record<string, any> = {};

  constructor(private readonly iconService: IconService) {}

  readonly aboutSection = viewChild.required<ElementRef>('aboutSection');

  sectionsLeft = [
    {
      title: 'Education',
      icon: 'calendar',
      data: [
        {
          year: '2017-present',
          title: 'Computer Science',
          subtitle: 'Hellenic Open University (H.O.U.)',
          description:
            'The Computer Science program at HOU provides a comprehensive education in computer science, covering a wide range of topics from software engineering to artificial intelligence. The program includes courses such as programming, algorithms, data structures, databases, and computer networks, making it accessible to individuals with basic computer knowledge. From fundamental concepts to advanced computer science techniques, the curriculum offers a holistic approach to computer science education.',
        },
      ],
      isList: true,
    },
    {
      title: 'Certificates',
      icon: 'certificate',
      data: [
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
          image: './certifications/magnolia.png',
        },
        {
          year: '2019',
          title: 'Angular - The Complete Guide',
          provider: 'Udemy',
          description:
            'Unlock the full potential of Angular with "Angular - The Complete Guide" on Udemy. Led by expert instructor Maximilian Schwarzmüller, this course provides a coprehensive journey from basics to advanced concepts, equipping you to build robust web applications with confidence.',
          image: './certifications/angular-udemy.png',
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
      ],
      isList: true,
    },
  ];
  sectionsRight = [
    {
      title: 'Experience',
      icon: 'briefcase',
      data: [
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
      ],
      isList: true,
    },
    {
      title: 'Interests',
      icon: 'heart',
      isList: false,
      data: [
        {
          description:
            'In my free time, I enjoy a variety of activities that help me relax and unwind. Here are some of my interests:',
          interestsList: [
            'Video Games',
            'D&D',
            'Movies',
            'TV series',
            'Outdoor Activities with my Dog',
          ],
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.User = this.iconService.getIcon('user');
    this.Cpu = this.iconService.getIcon('cpu');
    this.icons['linkedin'] = this.iconService.getIcon('linkedin');
    this.icons['github'] = this.iconService.getIcon('github');
    this.icons['globe'] = this.iconService.getIcon('globe');
    this.icons['frontEnd'] = this.iconService.getIcon('code');
    this.icons['styling'] = this.iconService.getIcon('layers');
    this.icons['backEnd'] = this.iconService.getIcon('server');
    this.icons['stateManagement'] = this.iconService.getIcon('shuffle');
    this.icons['versionControl'] = this.iconService.getIcon('gitCommit');
    this.icons['testing'] = this.iconService.getIcon('shieldCheck');
    this.personalInfo = [
      {
        label: 'Email',
        value: 'mouzakitis.m89@gmail.com',
        icon: this.iconService.getIcon('mail'),
      },
      {
        label: 'Phone',
        value: '+30 6982961433',
        icon: this.iconService.getIcon('phone'),
      },
      {
        label: 'City',
        value: 'Evia',
        icon: this.iconService.getIcon('map'),
      },
      {
        label: 'Address',
        value: 'Gavalas, Aliveri',
        icon: this.iconService.getIcon('map'),
      },
      {
        label: 'Date of Birth',
        value: '18/08/1989',
        icon: this.iconService.getIcon('calendar'),
      },
    ];
    this.socialLinks = [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/michalis-mouzakitis/',
        icon: this.icons['linkedin'],
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Michalis89',
        icon: this.icons['github'],
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@mouzakitis.m89',
        icon: this.icons['globe'],
      },
    ];

    this.techStack = [
      {
        category: 'Frontend Development',
        skills:
          'HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Next.js',
        icon: this.icons['frontEnd'],
      },
      {
        category: 'Testing & QA',
        skills:
          'Jest (Unit Testing), Cypress (E2E Testing), Stryker (Mutation Testing)',
        icon: this.icons['testing'],
      },
      {
        category: 'Styling & UI Libraries',
        skills: 'Tailwind CSS, Bootstrap, Angular Material',
        icon: this.icons['styling'],
      },
      {
        category: 'Backend & CMS',
        skills: ' Node.js, Firebase, Magnolia CMS',
        icon: this.icons['backEnd'],
      },
      {
        category: 'State Management',
        skills: 'Redux, NgRx, RxJS',
        icon: this.icons['stateManagement'],
      },

      {
        category: 'Version Control',
        skills: 'Git, GitHub, GitLab',
        icon: this.icons['versionControl'],
      },
    ];
  }

  ngAfterViewInit() {
    const aboutSection = this.aboutSection();
    if (aboutSection) {
      gsap.fromTo(
        aboutSection.nativeElement,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutSection.nativeElement,
            start: 'top 85%',
            end: 'top 10%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }
}
