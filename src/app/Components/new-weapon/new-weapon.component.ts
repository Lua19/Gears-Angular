import { Component, OnInit } from '@angular/core';
import { GearsService } from 'src/app/gears.service';
import { GearsGun } from 'src/app/interfaces/gears.interface';

@Component({
  selector: 'app-new-weapon',
  templateUrl: './new-weapon.component.html',
  styleUrls: ['./new-weapon.component.css']
})
export class NewWeaponComponent implements OnInit {

  NewGun:GearsGun = {
    gunID: 0,
    gunName : '',
    gunDesc : '',
    gunDamage : 0,
    gunShots : 0,
    gunImage: ''
  }
  constructor(private gearsService: GearsService) { }

  ngOnInit(): void {
  }
  conseguirArma(Form: any){
    this.NewGun = Form.value
    console.log(this.NewGun);
    this.gearsService.crearArma(this.NewGun).subscribe(
      arma =>{
        console.log({arma});
      }
    );
  }


}
