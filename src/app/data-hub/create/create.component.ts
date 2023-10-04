import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private ds:DataService, private router:Router){}
  dataFormHub:Data = {
    id: 0,
    Name: '',
    Mobile: 0,
    email: '',
    channel: '',
    Courses: '',
    rating: 0
  }

  ngOnInit(): void {

  }
  postData(){
    this.ds.createData(this.dataFormHub).subscribe({next:(res)=>{
      if(res){
        this.router.navigate(['/data-hub/home'])
      }
    },
    error:(err)=>{
      console.log(err)
    }
  })
  }

}
