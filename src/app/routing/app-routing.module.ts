import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main-pages/home/home.component';
import { CVComponent } from '../main-pages/cv/cv.component';

const routes: Routes = [
  {
    title: "Home",
    path: "",
    component: HomeComponent
  },
  {
    title: "CV",
    path: "cv",
    component: CVComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
