import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StatBoxComponent } from "./core/components/stat-box/stat-box.component";
import { LoaderComponent } from "./core/components/loader/loader.component";
import { PieChartComponent } from "./core/components/pie-chart/pie-chart.component";
import { LineChartComponent } from "./core/components/line-chart/line-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PieChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StatBoxComponent,
    LoaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
