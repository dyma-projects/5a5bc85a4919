import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //1 clique sur le composant 'liaison' doit afficher dans la console : 'clic !'
  clic(event:Event):void{
  	console.log('clic');
  }

}
