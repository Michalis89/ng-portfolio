import { NgFor, NgIf } from '@angular/common';
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
import { LucideAngularModule } from 'lucide-angular';
import { IconService } from '../../services/icon.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, AboutSectionComponent, LucideAngularModule, NgIf],
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
          year: '2026 - TBD',
          title: 'Vue - The Complete Guide (incl. Router & Composition API)',
          provider: 'Udemy',
          description:
            'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
        },
        {
          year: '2026 - TBD',
          title: 'JavaScript Algorithms and Data Structures Masterclass',
          provider: 'Udemy',
          description: '',
        },
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
            'Modernizing enterprise web apps with ReactJS & Next.js',
            'Introduced Redux Toolkit Query for consistent state/data management.',
            'Proposed Agile ceremonies (planning, retrospectives, stand-ups) to improve collaboration.',
            'Volunteered for a Scrum Master–like role, facilitating smoother workflows.',
          ],
        },
        {
          year: '2019 - 2024',
          title: 'Front-End Engineer',
          company: 'ARHS Developments',
          description:
            'Develop and maintain web applications for Proximus (client of Arhs) a huge telecommunications organization.',
          responsibilities: [
            'Built enterprise-scale apps with Angular & Magnolia CMS.',
            'Leveraged RxJS/NGXS for async data & state management.',
            'Reduced UI bugs by ~30% via Cypress regression suite & expanded unit/mutation coverage.',
            'Introduced Stryker mutation testing → more bulletproof unit tests, higher release confidence.',
            'Improved code quality by 25% (SonarQube: fewer code smells, reduced complexity).',
            'Improved code quality by 25% (SonarQube: fewer code smells, reduced complexity).',
            'Mentored juniors, code reviews, Agile collaboration.',
          ],
        },
        {
          year: '2018 - 2019',
          title: 'Front-End Developer',
          company: 'Agroknow',
          description:
            'Forecast trends in food safety incidents. Developed risk prevention systems.',
          responsibilities: [
            'Contributed to FOODAKAI rewrite with ReactJS, improving maintainability.',
            'Built research tools with React & Drupal CMS.',
            'Collaborated closely with backend on APIs/data flows.',
          ],
        },
        {
          year: '2016 - 2018',
          title: 'Junior Front-End Developer',
          company: 'Contadd',
          description:
            'Contadd is an innovative digital platform that brings advertisers, publishers and audiences together.',
          responsibilities: [
            'Prototyped & improved UI animations with jQuery → GSAP.',
            'Enhanced analytics setup with Cloudflare & DoubleClick.',
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
            {
              text: 'Competitive Strategy Games (One Piece TCG, Magic: The Gathering) → ',
              bold: 'strategic planning, adaptability',
            },
            {
              text: 'Gaming Communities (Soulsborne, Baldur’s Gate 3) → ',
              bold: 'problem-solving, persistence',
            },
            {
              text: 'Dungeons & Dragons →',
              bold: ' teamwork, creativity, communication',
            },
            {
              text: 'Outdoor Activities with my Dog → ',
              bold: ' balance, responsibility, stress relief',
            },
            {
              text: 'Anime & Manga Enthusiast → ',
              bold: ' cultural appreciation, storytelling',
            },
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
    this.icons['wrench'] = this.iconService.getIcon('wrench');
    this.icons['versionControl'] = this.iconService.getIcon('gitCommit');
    this.icons['testing'] = this.iconService.getIcon('shieldCheck');
    this.icons['refreshCw'] = this.iconService.getIcon('refreshCw');
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
          'Jest (Unit Testing), Cypress (E2E Testing), Stryker (Mutation Testing), SonarQube',
        icon: this.icons['testing'],
      },
      {
        category: 'Styling & UI Libraries',
        skills: 'Tailwind CSS, Bootstrap, Angular Material',
        icon: this.icons['styling'],
      },
      {
        category: 'Backend & CMS',
        skills: ' Node.js, NestJs, Firebase, Magnolia CMS, Drupal',
        icon: this.icons['backEnd'],
      },
      {
        category: 'State Management',
        skills: 'Redux, NgRx, RxJS',
        icon: this.icons['stateManagement'],
      },
      {
        category: 'DevOps & Tools',
        skills: 'CI/CD, GitHub Actions, Docker (basic)',
        icon: this.icons['wrench'],
      },
      {
        category: 'Version Control',
        skills: 'Git, GitHub, GitLab',
        icon: this.icons['versionControl'],
      },
      {
        category: 'Methodologies',
        skills: 'Agile/Scrum',
        icon: this.icons['refreshCw'],
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

  getAge(dateString: string): number {
    const today = new Date();
    const [day, month, year] = dateString.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
