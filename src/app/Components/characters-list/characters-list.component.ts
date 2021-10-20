import { Component, OnInit } from '@angular/core';
import { GearsService } from 'src/app/gears.service';
import { GearsCharacter } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  Characters: GearsCharacter[]=[];
  termino:string = 'characters';

  constructor(private GearsService:GearsService) { }
  ngOnInit(): void {
    this.termino = 'weapons';
    this.GearsService.darPersonajes(this.termino).subscribe((characters) =>{
      this.Characters = characters;
      console.log(characters)
    })
   
  }

}
