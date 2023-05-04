import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';
import { FrameLayoutComponent } from './frame-layout/frame-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavbarComponent,
    MainComponent,
    FrameLayoutComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
