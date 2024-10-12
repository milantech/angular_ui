import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerouteModule } from './homeroute.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomerouteModule
  ]
})
export class HomeModule { }
