import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allData:Data[] = [];
  constructor( private ds:DataService, private router:Router){
    this.get()
  }

  ngOnInit(): void {

  }
  get(){
    this.ds.getData().subscribe((result)=>{
      this.allData = result
      console.log('data', this.allData)
    })
  }



}
