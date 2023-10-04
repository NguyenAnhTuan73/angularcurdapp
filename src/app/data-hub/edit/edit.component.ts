import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { DataHubModule } from '../data-hub.module';
import { Data } from '../data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  dataFormHub: Data = {
    id: 0,
    Name: '',
    Mobile: 0,
    email: '',
    channel: '',
    Courses: '',
    rating: 0,
  };
  constructor(
    private ds: DataService,
    private actvateRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.actvateRouter.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getDataById(id);
    });
  }
  getDataById(id: number) {
    this.ds.getDataById(id).subscribe((result) => {
      if (result) {
        this.dataFormHub = result;
      }
    });
  }
  async update () {
    await this.ds.updateDataById(this.dataFormHub).subscribe({
      next: (res) => {
        if (res) {
          this.router.navigate(['/data-hub/home']);
        }
      },
      error:(err) =>{
        console.log(err)
      }
    });
  }
}
