import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
      }
      ,{
        path: 'contacts',
        loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience.component').then(c => c.ExperienceComponent)
      },
      {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills.component').then(c => c.SkillsComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent)
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
];
