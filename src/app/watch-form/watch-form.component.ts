import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-watch-form',
  templateUrl: './watch-form.component.html',
  styleUrls: ['./watch-form.component.css']
})
export class WatchFormComponent implements OnInit {
  price = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.min(0)]);
  model = new FormControl('', [Validators.required, Validators.maxLength(100)]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.price.hasError('required')) {
      return 'You must enter a value';
    }

    return this.price.hasError('length') ? 'Not a valid length' : '';
  }

}
