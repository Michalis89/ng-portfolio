import { Injectable } from '@angular/core';
import {
  Linkedin,
  Github,
  Globe,
  Calendar,
  GraduationCap,
  Award,
  Briefcase,
  Gamepad2,
  User,
  Cpu,
  PenTool,
  Mail,
  Phone,
  MapPin,
  Code,
  Layers,
  Server,
  GitBranch,
  ShieldCheck,
  Shuffle,
  GitCommit,
} from 'lucide-angular';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  readonly icons = {
    linkedin: Linkedin,
    github: Github,
    globe: Globe,
    medium: PenTool,
    calendar: Calendar,
    education: GraduationCap,
    certificates: Award,
    experience: Briefcase,
    interests: Gamepad2,
    user: User,
    cpu: Cpu,
    mail: Mail,
    phone: Phone,
    map: MapPin,
    code: Code,
    layers: Layers,
    server: Server,
    gitBranch: GitBranch,
    shieldCheck: ShieldCheck,
    shuffle: Shuffle,
    gitCommit: GitCommit,
  };

  getIcon(name: keyof typeof this.icons) {
    return this.icons[name];
  }
}
