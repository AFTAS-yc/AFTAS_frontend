import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTableComponent } from './components/levels/level-table/level-table.component';
import { FishTableComponent } from './components/fishs/fish-table/fish-table.component';
import { MemberTableComponent } from './components/members/member-table/member-table.component';
import { AllCompetitionsComponent } from './components/competitions/all-competitions/all-competitions.component';
import { CompetitionInfoComponent } from './components/competitions/competition-info/competition-info.component';
import { PodiumComponent } from './components/competitions/podium/podium.component';

const routes: Routes = [
  {path:'levels',component:LevelTableComponent},
  {path:'fishs',component:FishTableComponent},
  {path:'members',component:MemberTableComponent},
  {path:'',component:AllCompetitionsComponent},
  {path:'competitions/:code',component:CompetitionInfoComponent},
  {path:'competitions/podium/:code',component:PodiumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
