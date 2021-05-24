import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AddDailyGoalComponent } from './add-daily-goal/add-daily-goal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonDetailsComponent,
    AddDailyGoalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'person-details', component:PersonDetailsComponent },
      { path: 'add-daily-goal', component:AddDailyGoalComponent },


      
     // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    PushDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    {provide:'URL_API', useFactory: getBaseUrl,deps: []}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
