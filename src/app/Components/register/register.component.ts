import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    myForm: FormGroup;
    validEmail: boolean = false;
    validPhone: boolean;
    @ViewChild('image') image: ElementRef<HTMLInputElement>;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.myForm = this.fb.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            EmailAddress: ['', [Validators.required, Validators.email]],
            Password: ['', [Validators.required]],
            ConfirmPassword: ['', Validators.required,],
            Gender: ['', Validators.required],
            DOB: ['', Validators.required],
            PhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            Image: ['']
        });
    }

    onSubmit(form: FormGroup) {
        console.log("ENtered into component");
        if(form.invalid || form.value.DOB > new Date()) {
            form.setErrors({ invalidform: true });
            return;
        }
        form.setErrors({ invalidform: false });
        // var user=new UserModel();
        // user.firstName=form.value.FirstName;
        // user.lastName=form.value.LastName;
        // user.email=form.value.EmailAddress;
        // user.password=form.value.Password;
        // user.gender=form.value.Gender;
        // user.dob=form.value.DOB;
        // user.phoneNumber=form.value.PhoneNumber;
        // // user.image = this.convertToBase64URL(form.value.Image);
        // console.log(user.firstName,user.lastName,user.gender);
        // console.log(form.get('EmailAddress')?.errors?.['email']);
        // console.log(form.getError('wrongpassword'),form.getError('invalidform'));
        // this._createuser.PostUser(user).subscribe(isDataInserted => console.log(isDataInserted));
    }

    MatchPasswords(password: any, form: FormGroup) {
        if(password != form.value.Password)
            this.myForm.setErrors({ wrongpassword: true });
        else
            this.myForm.setErrors({ wrongpassword: false });
    }

    ageValidation(value: string) {
        var date = new Date(value);
        if(date >= new Date()) 
            this.myForm.get('DOB')?.setErrors({ invalidAge: true });
    }
}
