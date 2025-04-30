import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StatBoxComponent } from "./core/components/stat-box/stat-box.component";
import { LoaderComponent } from "./core/components/loader/loader.component";
import { PieChartComponent } from "./core/components/pie-chart/pie-chart.component";
import { LineChartComponent } from "./core/components/line-chart/line-chart.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HollowTitleComponent } from './core/components/hollow-title/hollow-title.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PieChartComponent,
    LineChartComponent,
    HollowTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StatBoxComponent,
    LoaderComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
