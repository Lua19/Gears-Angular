import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './Components/characters-list/characters-list.component';
import { ContentPageComponent } from './Components/content-page/content-page.component';
import { NewCharacterComponent } from './Components/new-character/new-character.component';
import { NewWeaponComponent } from './Components/new-weapon/new-weapon.component';
import { ViewCharacterCardComponent } from './Components/view-character-card/view-character-card.component';
import { ViewWeaponCardComponent } from './Components/view-weapon-card/view-weapon-card.component';
import { WeaponsListComponent } from './Components/weapons-list/weapons-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentPageComponent,
    pathMatch: 'full'
  },{
    path: 'weapons',
    component: WeaponsListComponent
  },{
    path:'characters',
    component: CharactersListComponent
  },{
    path:'characters/new',
    component:NewCharacterComponent
  },{
    path:'weapons/new',
    component: NewWeaponComponent
  },{
    path:'weapons/:id',
    component: ViewWeaponCardComponent
  },{
    path:'characters/:id',
    component: ViewCharacterCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
