import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/HomePage/home-page.component';
import { ContactPageComponent } from './pages/ContactPage/contact-page.component';
import { ContactDetailsPageComponent } from './pages/ContactDetailsPage/contact-details-page.component';
import { ContactEditPageComponent } from './pages/ContactEditPage/contact-edit-page.component';
import { StatisticPageComponent } from './pages/StatisticPage/statistic-page.component';
import { SignUpComponent } from './pages/SignupPage/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    // children: [
  },
  {
    path: 'edit',
    component: ContactEditPageComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditPageComponent
  },
  // ]
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent
  },
  {
    path: 'statistic',
    component: StatisticPageComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
