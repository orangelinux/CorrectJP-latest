import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorrectJPComponent } from './correct-jp/correct-jp.component';
import { CorrectjpappComponent } from './correctjpapp/correctjpapp.component';
import { TotuzensiComponent } from './totuzensi/totuzensi.component';
import { ReverseComponent } from './reverse/reverse.component';
import { AlienComponent } from './alien/alien.component';
import { APIComponent } from './api/api.component';
import { FalconComponent } from './falcon/falcon.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "correctjp", component: CorrectJPComponent },
  { path: "correctjpapp", component: CorrectjpappComponent },
  { path: "totuzennosi", component: TotuzensiComponent },
  { path: "reverse", component: ReverseComponent },
  { path: "ALIEN", component: AlienComponent },
  { path: "API", component: APIComponent },
  { path: "ALIEN", component: AlienComponent },
  { path: "Falcon",component: FalconComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
