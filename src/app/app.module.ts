import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule} from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routing.module";
import { HomeModule } from "./home/home.module";

@NgModule({
declarations:[AppComponent],
imports:[BrowserModule,AppRoutingModule],
providers:[],
bootstrap:[AppComponent]
})

export class AppModule {

}