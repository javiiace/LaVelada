import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CombatesComponent} from "./pages/combates/combates.component";
import {InfoboxeadoresComponent} from "./pages/infoboxeadores/infoboxeadores.component";
import {PronosticosComponent} from "./pages/pronosticos/pronosticos.component";

export const routes: Routes = [
  {path: "combates", component: CombatesComponent},
  {path: "combate/:id", component: InfoboxeadoresComponent},
  {path: "pronosticos", component: PronosticosComponent},
  {path: "**", component: HomeComponent}
];
