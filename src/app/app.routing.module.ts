import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const route : Routes = [
   { path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}

]

@NgModule({
imports:[RouterModule.forRoot(route)],
exports:[RouterModule]
})

export class AppRoutingModule{
    
}