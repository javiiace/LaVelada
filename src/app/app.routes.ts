import { Routes } from '@angular/router';
import {HomeVideoComponent} from "./pages/home-video/home-video.component";
import {ErrorComponent} from "./pages/error/error.component";

export const routes: Routes = [
  {path: "home", component: HomeVideoComponent},
  {path: "combates", component: ErrorComponent},
  {path: "pronosticos", component: ErrorComponent},
  {path: "entradas", component: ErrorComponent},
  {path: "**",component: HomeVideoComponent}
];
