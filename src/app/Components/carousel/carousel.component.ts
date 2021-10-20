import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {

 images : string [] = ['https://cdn.gears5.com/media/sites/6/2021/01/Standard_2058x1440-%E2%80%93-6-5ff3661f0128b.jpg','https://cdn.gears5.com/media/sites/6/2021/05/op-7-wallpaper-standard-609c2721cdf52.jpg','https://cdn.gears5.com/media/sites/6/2020/05/Operations_3_Key_Art_Branded_Standard_2058x1440-5ec41a947a7ca.jpg']
 showNavigationArrows =true ;
 constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.interval = 10000;
  config.wrap = true;
  config.keyboard = false;
  config.pauseOnHover = false;
  config.showNavigationArrows = true;
  config.showNavigationIndicators = false;
}
}
