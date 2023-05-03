import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image:string = "./assets/video.png";
  public Titulo:string = "Cursos de Angular con Interpoblacion";
  @Input() dataEntrante: any;

  constructor() { }

  ngOnInit (): void{


  }


}
