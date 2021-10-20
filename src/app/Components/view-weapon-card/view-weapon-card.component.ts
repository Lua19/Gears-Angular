
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap,tap} from 'rxjs/operators'

import { GearsService } from 'src/app/gears.service';
import { GearsGun } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-view-weapon-card',
  templateUrl: './view-weapon-card.component.html',
  styleUrls: ['./view-weapon-card.component.css']
})
export class ViewWeaponCardComponent implements OnInit {

  arma!: GearsGun;


  constructor(private gearsService:GearsService,
              private activatedRoute:ActivatedRoute
            ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.gearsService.obtenerArma(id)))
    .subscribe(weapon =>{
      this.arma = weapon;
    })
    ;
  }

  UpdateGun(gun: any){
     this.arma = gun.form.value;
     this.activatedRoute.params.subscribe(HttpParams => {
       this.arma.gunID = HttpParams['id'];
     })
    console.log(this.arma);
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.gearsService.actualizarArma(id,this.arma)))
    .subscribe(weapon =>{
      this.arma = weapon;
    })
    ;
  }

}
