import { Component, OnInit } from '@angular/core';
import { GearsService } from 'src/app/gears.service';
import { GearsCharacter } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  NewCharacter:GearsCharacter = {
    characterID: 0,
    characterName: '',
    characterDesc:'',
    characterAge:0,
    characterImage:''
  }

  constructor(private gearsService: GearsService) { }

  ngOnInit(): void {
  }
  conseguirPersonaje(Form:any){
    this.NewCharacter = Form.value
    console.log(this.NewCharacter);
    this.gearsService.crearPersonaje(this.NewCharacter).subscribe(
      personaje =>{
        console.log({personaje});
      }
    );
  }
}
