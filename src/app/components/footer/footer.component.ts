import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, LucideAngularModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  readonly quickLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  socialLinks: { name: string; url: string; icon: any }[] = [];

  constructor(private readonly iconService: IconService) {}

  ngOnInit(): void {
    this.socialLinks = [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/michalis-mouzakitis/',
        icon: this.iconService.getIcon('linkedin'),
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Michalis89',
        icon: this.iconService.getIcon('github'),
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@mouzakitis.m89',
        icon: this.iconService.getIcon('medium'),
      },
    ];
  }
}
