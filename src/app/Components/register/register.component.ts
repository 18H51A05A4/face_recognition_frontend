import { AppServicesService } from './../../Services/app-services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/Models/user-model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    myForm: FormGroup;

    constructor(private fb: FormBuilder, private _appService: AppServicesService) { }

    ngOnInit(): void {
        this.myForm = this.fb.group({
            Username: [''],
            EmailAddress: [''],
            Password: [''],
            Role: ['faculty']
        });
    }

    onSubmit(form: FormGroup) {
        if(form.invalid || form.value.DOB > new Date()) {
            form.setErrors({ invalidform: true });
            return;
        }
        form.setErrors({ invalidform: false });
        var user=new UserModel();
        user.username=form.value.Username;
        user.email=form.value.EmailAddress;
        user.password=form.value.Password;
        if(form.value.Role == 'faculty') {
            this._appService.createFaculty(user).subscribe(res => {
                console.log(res);
            });
        } else {
            this._appService.createStudent(user).subscribe(res => {
                console.log(res);
            });
        }
    }
}
