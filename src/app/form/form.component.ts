import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  alphaNumInput: FormControl;
  message: String;

  constructor() {}

  ngOnInit(): void {
    const pattern = '^[a-zA-Z0-9]*$';
    this.alphaNumInput = new FormControl("", [
      Validators.required,
      Validators.pattern(pattern),
    ]);
  }

  validateValue() {
    if (this.alphaNumInput.valid) {
      this.message = "Ok c'est validé";
    } else {
      this.message = "La valeur doit être en alphanumérique";
    }
  }
}
