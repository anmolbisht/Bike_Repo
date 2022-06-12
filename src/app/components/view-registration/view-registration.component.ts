import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg: any;

  constructor(private bikeSerivce: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getBikeReg(this.route.snapshot.params['id']);
  }
  getBikeReg(id: number){
      this.bikeSerivce.getBike(id).subscribe(
        data=> {
          this.bikeReg= data
        },
        err=> console.log(err),
        ()=> console.log("bike loaded")
      );
  }

}
