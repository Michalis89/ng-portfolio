import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  showFooter: boolean = true;
  showNavBar: boolean = true;

  constructor(private readonly router: Router) {
    this.router.events.subscribe(() => {
      this.showFooter = this.router.url !== '/';
      this.showNavBar = this.router.url !== '/';
    });
  }
}
