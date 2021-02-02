import { Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { WorkComponent } from '../work/work.component';
import { ResearchComponent } from '../research/research.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'courses-certifications', component: CoursesComponent},
    {path: 'work', component: WorkComponent},
    {path: 'research', component: ResearchComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]