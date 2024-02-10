import { Component,Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images=[
    {src:'./assets/images/poert1.png'},
    {src:'./assets/images/port2.png'},
    {src:'./assets/images/port3.png'},
    {src:'./assets/images/poert1.png'},
    {src:'./assets/images/port2.png'},
    {src:'./assets/images/port3.png'}
  ]
  isShown: boolean = false;
imageSelected:string=''
  toggleShow(src:string): void {
    this.isShown = !this.isShown;
    this.imageSelected=src;
  }
  
  isHide: boolean = true;

  toggleHide(): void {
    this.isShown = !this.isShown;
  }
  imgeInfo(event:any):void{
    console.log(event)
  }
}
