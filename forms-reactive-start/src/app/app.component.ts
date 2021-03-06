import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(null, [
          Validators.required,
          this.forbiddenEmails.bind(this)
        ])
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(value => console.log(value));

    this.signupForm.setValue({
      userData: {
        username: 'Joakim',
        email: 'joakim@test.com'
      },
      gender: 'male',
      hobbies: []
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    <FormArray>this.signupForm.get('hobbies').push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForBidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
