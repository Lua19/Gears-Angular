import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GearsService } from 'src/app/gears.service';
import { GearsCharacter } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-view-character-card',
  templateUrl: './view-character-card.component.html',
  styleUrls: ['./view-character-card.component.css']
})
export class ViewCharacterCardComponent implements OnInit {

  personaje!: GearsCharacter;

  constructor(private gearsService:GearsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.gearsService.obtenerPersonaje(id)))
    .subscribe(character =>{
    this.personaje = character;
    });
  }

  UpdateCharacter(personaje: any){
    this.personaje = personaje.form.value;
    this.activatedRoute.params.subscribe(HttpParams => {
      this.personaje.characterID = HttpParams['id'];
    })
   console.log(this.personaje);
   this.activatedRoute.params
   .pipe(switchMap(({id}) => this.gearsService.actualizarPersonaje(id,this.personaje)))
   .subscribe(character =>{
     this.personaje = character;
   })
   ;
 }

}
