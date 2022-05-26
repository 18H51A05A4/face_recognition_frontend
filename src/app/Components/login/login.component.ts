import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  onSubmit(form: FormGroup) {      
    var user = {
      email: form.value.email,
      password: form.value.password
    }
    // this.loginServ.postObject(user).subscribe(res => {
    //   console.log(res.token);
    //   console.log(res);
    //   localStorage.setItem('AccessToken', res.token)
    // });
  }
}
