import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signUpForm: NgForm;

  submitted = false;
  user = {
    email: '',
    subscription: 'advanced',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm);
    this.user = {
      email: this.signUpForm.value.email,
      subscription: this.signUpForm.value.subscription,
      password: this.signUpForm.value.password
    };
  }
}
