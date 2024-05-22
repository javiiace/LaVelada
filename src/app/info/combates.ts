export interface Combates{
  id:number;
  luchador1: string;
  luchador2: string;
  luchador3?: string;
  luchador4?:string;
}

export const peleas: Combates[] =[
  {id: 1, luchador1:"el_mariana", luchador2:"plex"},
  {id: 2, luchador1:"carrera", luchador2:"agustin"},
  {id: 3, luchador1:"guanyar", luchador2:"la_cobra"},
  {id: 4, luchador1:"zeling", luchador2:"nissaxter", luchador3: "alana", luchador4: "ama"},
  {id: 3, luchador1:"viruzz", luchador2:"shelao"},

]
