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
import { LucideAngularModule, CircleUser } from 'lucide-angular';
import { IconService } from '../../services/icon/icon.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutSectionComponent, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, AfterViewInit {
  User: any;
  Cpu: any;
  UserCircle = CircleUser;

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
        // {
        //   year: '2026 - TBD',
        //   title: 'Vue - The Complete Guide (incl. Router & Composition API)',
        //   provider: 'Udemy',
        //   description:
        //     'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
        // },
        // {
        //   year: '2026 - TBD',
        //   title: 'JavaScript Algorithms and Data Structures Masterclass',
        //   provider: 'Udemy',
        //   description: '',
        // },
        // {
        //   year: '2025 - TBD',
        //   title: 'Next.js 15 & React - The Complete Guide',
        //   provider: 'Udemy',
        //   description:
        //     'Learn NextJS 15 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!',
        // },
        // {
        //   year: '2025 - Ongoing',
        //   title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
        //   provider: 'Udemy',
        //   description:
        //     'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
        // },
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
          image: './certifications/angular-udemy.png',
        },
        {
          year: '2018',
          title: 'React Training',
          provider: 'CodeHub',
        },
        {
          year: '2016',
          title: 'Certification Of Web Development',
          provider: 'EKPA',
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
          title: 'Front-End Developer',
          company: 'ARHS Developments',
          description:
            'Develop and maintain web applications for EPO (European Patent Office).',
          responsibilities: [
            'Modernizing enterprise web applications using React and Next.js.',
            'Worked with Redux Toolkit Query for data fetching and state management.',
            'Took initiative in improving team collaboration by supporting Agile ceremonies (planning, backlog refinement, retrospectives).',
          ],
        },
        {
          year: '2019 - 2024',
          title: 'Front-End Engineer',
          company: 'ARHS Developments',
          description:
            'Develop and maintain web applications for Proximus (client of Arhs) a telecommunications organization.',
          responsibilities: [
            'Built and maintained enterprise-scale applications using Angular and Magnolia CMS.',
            'Worked with RxJS and NGXS for asynchronous flows and state management.',
            'Used Jest for unit testing and Stryker for mutation testing.',
            'Contributed to UI stability through Cypress regression testing.',
            'Collaborated with the team to maintain code quality using SonarQube.',
            'Supported junior developers mainly on Magnolia CMS topics.',
          ],
        },
        {
          year: '2018 - 2019',
          title: 'Front-End Developer',
          company: 'Agroknow',
          description:
            'Forecast trends in food safety incidents. Developed risk prevention systems.',
          responsibilities: [
            'Contributed to the FOODAKAI rewrite using React.',
            'Built research tools for external researchers, integrated into Drupal CMS.',
            'Collaborated with backend developers on API integration and data flows.',
          ],
        },
        {
          year: '2016 - 2018',
          title: 'Junior Front-End Developer',
          company: 'Contadd',
          description:
            'Contadd was an innovative digital platform that brings advertisers, publishers and audiences together.',
          responsibilities: [
            'Enhanced existing ad animation prototypes by transitioning from jQuery-based animations to GSAP.',
            'Assisted with analytics setup and tracking using Cloudflare and DoubleClick.',
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
          interestsList: [
            {
              text: 'Gaming',
            },
            {
              text: 'Dungeons & Dragons (5th Edition)',
            },
            {
              text: 'Trading Card Games',
            },
            {
              text: 'Outdoor Activities with my Dog',
            },
            {
              text: 'Anime & Manga',
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
