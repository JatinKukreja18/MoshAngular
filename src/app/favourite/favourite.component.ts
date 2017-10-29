import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Output() change = new EventEmitter();
  unliked = "glyphicon glyphicon-star-empty"
  liked = "glyphicon glyphicon-star"
  activeClass:string;
  isFavourite: boolean;
  constructor() {
      
   }
   


  favourited(aClass){
      this.isFavourite = !this.isFavourite
      this.change.emit({newVal : this.isFavourite});
  }
  ngOnInit() {
  }

}
