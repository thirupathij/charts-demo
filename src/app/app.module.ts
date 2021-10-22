import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { MainComponent } from './ui/main/main.component';
import { NavComponent } from './ui/nav/nav.component';
import { ChartsComponent } from './charts/charts.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    MainComponent,
    ChartsComponent,
    MenuOneComponent,
    MenuTwoComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GoogleChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
