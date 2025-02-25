import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
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
  Twitter,
  Globe,
} from 'lucide-angular';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, AboutSectionComponent, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  readonly aboutSection = viewChild.required<ElementRef>('aboutSection');

  readonly User = User;
  readonly Cpu = Cpu;

  readonly personalInfo = [
    { label: 'Email', value: 'mouzakitis.m89@gmail.com', icon: Mail },
    { label: 'Phone', value: '+30 6982961433', icon: Phone },
    { label: 'City', value: 'Evia', icon: MapPin },
    { label: 'Address', value: 'Gavalas, Aliveri', icon: MapPin },
    { label: 'Date of Birth', value: '18/08/1989', icon: Calendar },
  ];
  readonly techStack = [
    {
      category: 'Frontend Development',
      skills: 'HTML5, CSS3, JavaScript, TypeScript, Angular, React.js, Next.js',
      icon: Code,
    },
    {
      category: 'Styling & UI Libraries',
      skills: 'Tailwind CSS, Bootstrap, Angular Material',
      icon: Layers,
    },
    {
      category: 'CMS & Backend Technologies',
      skills: 'Magnolia CMS, Firebase, Node.js',
      icon: Server,
    },
    {
      category: 'State Management & Data Fetching',
      skills: 'Redux, Redux Toolkit, RTK Query, NgRx, RxJS',
      icon: GitBranch,
    },
    {
      category: 'Testing & Quality Assurance',
      skills:
        'Jest (Unit Testing), Cypress (E2E Testing), Stryker (Mutation Testing)',
      icon: ShieldCheck,
    },
    {
      category: 'Version Control & DevOps',
      skills: 'Git, GitHub, GitLab',
      icon: GitBranch,
    },
  ];
  readonly icons = {
    Linkedin: Linkedin,
    Github: Github,
    Twitter: Twitter,
    Globe: Globe,
  };
  readonly socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/your-profile',
      icon: this.icons.Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-username',
      icon: this.icons.Github,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-handle',
      icon: this.icons.Twitter,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@yourusername',
      icon: this.icons.Globe,
    },
  ];

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
