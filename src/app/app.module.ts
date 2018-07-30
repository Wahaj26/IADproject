import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollClassComponent } from './enroll-class/enroll-class.component';
import { EnrollClassListComponent } from './enroll-class-list/enroll-class-list.component';
import { OwnClassComponent } from './own-class/own-class.component';
import { OwnClassListComponent } from './own-class-list/own-class-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuard2Service } from './auth-guard2.service';
import { EmployeesComponent } from './employees/employees.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MyDatePickerModule } from 'mydatepicker';
import { AdminViewTaskComponent } from './admin-view-task/admin-view-task.component';
import { EmployeeViewTaskComponent } from './employee-view-task/employee-view-task.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    SignInComponent,
    NavbarComponent,
    DashboardComponent,
    EnrollClassComponent,
    EnrollClassListComponent,
    OwnClassComponent,
    OwnClassListComponent,
    EmployeesComponent,
    CreateTaskComponent,
    AdminViewTaskComponent,
    EmployeeViewTaskComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    RouterModule.forRoot(
      [
        { path: '', canActivate: [AuthGuard2Service], component: HomeComponent },
        { path: 'signup', component: SignUpComponent },
        { path: 'signin', component: SignInComponent },
        { path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent },
        { path: 'enroll', canActivate: [AuthGuardService], component: EnrollClassComponent },
        { path: 'ownClass', canActivate: [AuthGuardService], component: OwnClassComponent },
        { path: 'ownClassList', canActivate: [AuthGuardService], component: OwnClassListComponent },
        { path: 'enrollClassList', canActivate: [AuthGuardService], component: EnrollClassListComponent },
        { path: 'employees/:pid', canActivate: [AuthGuardService], component: EmployeesComponent },
        { path: 'createTask/:pid/:eid', canActivate: [AuthGuardService], component: CreateTaskComponent },
        { path: 'adminViewTask/:pid/:eid', canActivate: [AuthGuardService], component: AdminViewTaskComponent },
        { path: 'employeeViewTask/:pid/:eid', canActivate: [AuthGuardService], component: EmployeeViewTaskComponent }


      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
