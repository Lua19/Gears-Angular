import { Component, OnInit} from '@angular/core';


import { GearsService } from 'src/app/gears.service';
import { GearsGun } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.css']
})
export class WeaponsListComponent implements OnInit{

  Guns : GearsGun[]=[];
  termino:string = 'guns';

  constructor(private GearsService:GearsService) { }
  ngOnInit(): void {
    this.termino = 'weapons';
    this.GearsService.darArmas(this.termino).subscribe((guns) =>{
      this.Guns = guns;
      console.log(guns)
    })
  }

}
