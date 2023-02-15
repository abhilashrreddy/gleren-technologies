import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
})
export class StepperFormComponent implements OnInit {
  registerForm: FormGroup;
  public showPassword: boolean = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: [
        '',
        [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      city: ['', Validators.required],
    });
    // console.log(this.registerForm.value);
  }

  onSubmit(data: any) {
    console.log(this.registerForm.value);
    this.user.getUserData(this.registerForm.value);
    this.user
      .createUser({
        name: data.firstName + ' ' + data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        city: data.city,
        password: data.password,
      })
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/user-view']);
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
