import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DistrictComponent } from './district/district.component';
import { HelplineComponent } from './helpline/helpline.component';
import { CoronaService } from './shared/corona.service';
import { HttpClientModule } from '@angular/common/http';
import { DemohomeComponent } from './demohome/demohome.component';
import { DemoService } from './shared/demo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictComponent,
    HelplineComponent,
    DemohomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoronaService, DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
