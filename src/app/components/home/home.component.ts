import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Observable } from 'rxjs';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[]=[
    "Globo MTB 29",
    "Globo fiber",
    "Globo  Time"
  ];

  bikeform!: FormGroup;
  ValidMessage : string ="";

  constructor(private bikeService: BikeService) { }

  ngOnInit(){
    this.bikeform =  new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required)
    });
  }
  submitRegistration(){
    if(this.bikeform.valid){
      this.ValidMessage= "Your bike registration was successful";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data=> {
          this.bikeform.reset();
          return true
        }
      )
    }
    else{
      this.ValidMessage= "Please fill the form properly";
    }
  }
  

}
