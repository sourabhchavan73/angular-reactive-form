import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { passwordChecker } from '../../custom-validators/password-checker';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  isSubmitted = false;
  registerForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: ['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: ['', Validators.requiredTrue],
    }, {
      Validators: passwordChecker('password', 'confirmPassword')
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return
    }

    console.log(this.registerForm)
  }

  onResetForm(){
    this.isSubmitted = false;
    this.registerForm.reset();
  }

}
