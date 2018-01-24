import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {

  }
 
  //3 exemples de data-binding:
  //binding de données-string interpolation
  data1:string="hello!";
  //binding de propriété
  propriete_date:string ="date";
  //binding d'evenement - 1 clique sur la div "binding d'evenement" 
  color:string='purple';
  changeColor(color:string):void{
  	this.color=color;
  }

  public status:boolean=true;
  public texts:string[]=['un','deux','trois'];
}
