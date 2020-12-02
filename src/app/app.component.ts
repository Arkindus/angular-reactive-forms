import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms';
  clearances = ['admin', 'student', 'teacher'];
  signInForm: FormGroup;

  ngOnInit() {
    this.signInForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required)
      }),
      'clearance': new FormControl('admin'),
      'certificates': new FormArray([])
    });
  }

  onAddCertificate() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signInForm.get('certificates')).push(control);
  }

  getControl() {
    return (<FormArray>this.signInForm.get('certificates')).controls;
  }

  onFormSubmitted() {
    console.log(this.signInForm);
  }
}
