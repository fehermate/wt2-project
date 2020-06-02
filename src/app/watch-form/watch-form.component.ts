import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-watch-form',
  templateUrl: './watch-form.component.html',
  styleUrls: ['./watch-form.component.css']
})
export class WatchFormComponent implements OnInit {

  price = new FormControl('', Validators.required);
  brand = new FormControl('', Validators.required);
  model = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  movement = new FormControl('', Validators.required);
  caseMaterial = new FormControl('', Validators.required);


  watchForm = new FormGroup(
    {
      price: this.price,
      brand: this.brand,
      model: this.model,
      gender: this.gender,
      movement: this.movement,
      caseMaterial: this.caseMaterial
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.price.hasError('required')) {
      return 'You must enter a value';
    }

    return this.price.hasError('length') ? 'Not a valid length' : '';
  }

  onSubmit(){
    console.log("submit!");
  }

}
