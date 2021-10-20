import { Component, Input } from '@angular/core';
import { GearsService } from 'src/app/gears.service';
import { GearsCharacter } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css']
})
export class CharactersCardComponent {

  @Input()characters: GearsCharacter[]= [];
  constructor(private gearsService: GearsService) { }
  
  delete(id:number){
    this.gearsService.borrarPersonaje(id).subscribe(
    )
    console.log('Borrao')
  }

}
