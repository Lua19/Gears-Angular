import { Component, Input } from '@angular/core';
import { GearsService } from 'src/app/gears.service';
import { GearsGun } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-weapons-card',
  templateUrl: './weapons-card.component.html',
  styleUrls: ['./weapons-card.component.css']
})
export class WeaponsCardComponent {


  @Input()guns: GearsGun[]= [];
  constructor(private gearsService: GearsService) { }

  delete(id:number){
    this.gearsService.borrarArma(id).subscribe(
    )
    console.log('Borrao')
  }
  

}
