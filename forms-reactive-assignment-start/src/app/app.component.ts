import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectName = 'Test';
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.asyncProjectNameValidator.bind(this),
        this.projectNameValidator.bind(this)
      ]),
      email: new FormControl(null, Validators.email),
      projectStatus: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  projectNameValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  asyncProjectNameValidator(
    control: FormControl
  ): Promise<any> | Observable<any> {
    console.log(control.value);
    const validator = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          console.log(true);
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });

    return validator;
  }
}
