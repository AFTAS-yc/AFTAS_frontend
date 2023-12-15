import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FormsModule } from '@angular/forms';
import { AddLevelFormComponent } from './components/levels/add-level-form/add-level-form.component';
import { UpdateLevelFormComponent } from './components/levels/update-level-form/update-level-form.component';
import { LevelTableComponent } from './components/levels/level-table/level-table.component';
import { FishTableComponent } from './components/fishs/fish-table/fish-table.component';
import { AddFishFormComponent } from './components/fishs/add-fish-form/add-fish-form.component';
import { MemberTableComponent } from './components/members/member-table/member-table.component';
import { AddMemberFormComponent } from './components/members/add-member-form/add-member-form.component';
import { AllCompetitionsComponent } from './components/competitions/all-competitions/all-competitions.component';
import { AddCompetitionFormComponent } from './components/competitions/add-competition-form/add-competition-form.component';
import { UpdateCompetitionFormComponent } from './components/competitions/update-competition-form/update-competition-form.component';
import { CompetitionInfoComponent } from './components/competitions/competition-info/competition-info.component';
import { MembersInCompetitionComponent } from './components/competitions/members-in-competition/members-in-competition.component';
import { HuntingsInCompetitionComponent } from './components/competitions/huntings-in-competition/huntings-in-competition.component';
import { PodiumComponent } from './components/competitions/podium/podium.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    AddLevelFormComponent,
    UpdateLevelFormComponent,
    LevelTableComponent,
    FishTableComponent,
    AddFishFormComponent,
    MemberTableComponent,
    AddMemberFormComponent,
    AllCompetitionsComponent,
    AddCompetitionFormComponent,
    UpdateCompetitionFormComponent,
    CompetitionInfoComponent,
    MembersInCompetitionComponent,
    HuntingsInCompetitionComponent,
    PodiumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
