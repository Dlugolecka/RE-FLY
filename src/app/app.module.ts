import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogonComponent } from './logon/logon.component';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './summary/summary.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { WeatherComponent } from './homepage/weather/weather.component';
import { ChoiceOfPlaceComponent } from './homepage/choice-of-place/choice-of-place.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
