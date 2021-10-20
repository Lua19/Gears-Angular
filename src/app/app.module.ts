import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContentPageComponent } from './Components/content-page/content-page.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeaponsListComponent } from './Components/weapons-list/weapons-list.component';
import { CharactersListComponent } from './Components/characters-list/characters-list.component';
import { WeaponsCardComponent } from './Components/weapons-card/weapons-card.component';
import { CharactersCardComponent } from './Components/characters-card/characters-card.component';
import { NewWeaponComponent } from './Components/new-weapon/new-weapon.component';
import { FormsModule } from '@angular/forms';
import { ViewWeaponCardComponent } from './Components/view-weapon-card/view-weapon-card.component';
import { NewCharacterComponent } from './Components/new-character/new-character.component';
import { ViewCharacterCardComponent } from './Components/view-character-card/view-character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentPageComponent,
    CarouselComponent,
    WeaponsListComponent,
    CharactersListComponent,
    WeaponsCardComponent,
    CharactersCardComponent,
    NewWeaponComponent,
    ViewWeaponCardComponent,
    NewCharacterComponent,
    ViewCharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
