import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SuccessComponent } from './pages/success/success.component';
import { CheckMailComponent } from './pages/check-mail/check-mail.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

import { AuthGuard } from './shares/guard/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'check-mail', component: CheckMailComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
