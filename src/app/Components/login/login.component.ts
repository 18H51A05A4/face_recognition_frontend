import { AppServicesService } from './../../Services/app-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private _appService: AppServicesService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }

  onSubmit(form: FormGroup) {      
    var user = {
      username: form.value.email,
      password: form.value.password
    }
    this._appService.checkUser(user).subscribe(res => {
      localStorage.setItem("Access_Token", res.access);
      this._appService.getUser().subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        location.href = '/dashboard';
      });
    });
  }
}
