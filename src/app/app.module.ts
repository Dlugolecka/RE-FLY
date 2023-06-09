import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LogonComponent } from './views/logon/logon.component';
import { DetailsComponent } from './views/details/details.component';
import { SummaryComponent } from './views/summary/summary.component';
import { ErrorComponent } from './views/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { WeatherComponent } from './components/weather/weather.component';
import { ChoiceOfPlaceComponent } from './components/choice-of-place/choice-of-place.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DeparturePlaceComponent } from './components/departure-place/departure-place.component';
import { ArrivalPaceComponent } from './components/arrival-place/arrival-place.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { APP_DATE_FORMATS } from './core/date.format';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AirplaneComponent } from './components/airplane/airplane.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LogonComponent,
    DetailsComponent,
    SummaryComponent,
    ErrorComponent,
    WeatherComponent,
    ChoiceOfPlaceComponent,
    DeparturePlaceComponent,
    ArrivalPaceComponent,
    CalendarComponent,
    PassengersComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AirplaneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
