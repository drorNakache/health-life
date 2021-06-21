import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';


import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

import { PersonDetailsComponent } from './person-details/person-details.component';
import { PushDataService } from './services/push-data.service';
import { getBaseUrl } from 'src/main';
import { AddDailyGoalComponent } from './daily-goal/add-daily-goal/add-daily-goal.component';
import { WeightReportComponent } from './weight-report/weight-report.component';
import { DailyEatingReportComponent } from  './daily-eating/daily-eating-report/daily-eating-report.component';
import { DailyGoalComponent } from './daily-goal/daily-goal.component';
import { DailyEatingComponent } from './daily-eating/daily-eating.component';
import { EatDetailsComponent } from './eat-details/eat-details.component';
import { EatDetailFormComponent } from './eat-details/eat-detail-form/eat-detail-form.component';
import { EatGoalComponent } from './eat-goal/eat-goal.component';
import { EatGoalFormComponent } from './eat-goal/eat-goal-form/eat-goal-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodListComponent } from './food-list/food-list.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonDetailsComponent,
    AddDailyGoalComponent,
    WeightReportComponent,
    DailyEatingReportComponent,
    DailyEatingComponent,
    DailyGoalComponent,
    EatDetailsComponent,
    EatDetailFormComponent,
    EatGoalComponent,
    EatGoalFormComponent,
    DashboardComponent,
    FoodListComponent,
    ChartDashboardComponent, 
  
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'person-details', component: PersonDetailsComponent },
    { path: 'eat-goal', component: EatGoalComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'weight-report', component: WeightReportComponent },
    { path: 'eat-details', component: EatDetailsComponent },
    { path: 'food-list', component: FoodListComponent },

    // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule
  ],
  providers: [
    PushDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    {provide:'URL_API', useFactory: getBaseUrl,deps: []}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
