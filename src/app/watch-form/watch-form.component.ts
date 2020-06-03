import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-watch-form',
  templateUrl: './watch-form.component.html',
  styleUrls: ['./watch-form.component.css']
})
export class WatchFormComponent implements OnInit {

  price = new FormControl('', [Validators.required, Validators.min(1)]);
  brand = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  model = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
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
    let errors: string[];
    if (this.price.hasError('required') ||
      this.brand.hasError('required') ||
      this.model.hasError('required')
    ) {
      return ('You must enter a value');
    }

    return this.price.hasError('min') ? 'Not a valid length' : '';

    return errors;
  }

  getErrorMessageForOptions() {
    if (this.gender.hasError('required') ||
      this.movement.hasError('required') ||
      this.caseMaterial.hasError('required')
    ) {
      return 'You must choose a value';
    }
  }

  onSubmit(){
    alert("Watch submitted to database.");
  }

}
