import { Component } from '@angular/core';

interface GameAvengers{
  gName:string;
  gdiscription:string;
  gImg?:string;
  gPrice:any;
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class About {
  allGame:GameAvengers[]=[
    {gImg:"../../assets/img/16.jpg", gName: "Game Iron Man", gdiscription:"Info:  LEGO Iron Man from Warner Bros Interactive PlayStation From Warren",gPrice:"price: 600$"},
    {gImg:"../../assets/img/17.jpg", gName: "Iron Man Vs Captain America", gdiscription:"Info:  LEGO Iron Man Vs Captain America from Warner Bros Interactive PlayStation From Warren" , gPrice:"price: 400$"},
    {gImg:"../../assets/img/18.jpg", gName: "Game Marvels Avengers", gdiscription:"Info:  LEGO Marvels Avengers from Warner Bros Interactive PlayStation From Warren" , gPrice:"price: 700$"},
    {gImg:"../../assets/img/15.jpg", gName: "Game Marvels Avengers", gdiscription:"Info:  LEGO Marvels Avengers from Warner Bros Interactive PlayStation From Warren" , gPrice:"price: 750$"},
    {gImg:"../../assets/img/14.jpg", gName: "Game Marvels Avengers", gdiscription:"Info:  LEGO Marvels Avengers from Warner Bros Interactive PlayStation From Warren" , gPrice:"price: 800$"},
    {gImg:"../../assets/img/19.jpg", gName: "Game Marvels Avengers", gdiscription:"Info:  LEGO Marvels Avengers from Warner Bros Interactive PlayStation From Warren" , gPrice:"price: 900$"},
  ]


}