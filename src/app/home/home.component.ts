import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      userpassword: [
        null,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      usercheck: [
        false,
        [
          Validators.requiredTrue
        ]
      ]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      //alert("OK");
      Swal.fire(
        {
          title: 'ยินดีด้วยนะ',
          text: 'คุณได้เข้าสู่ระบบแล้ว',
          icon: 'success',
          confirmButtonText: 'ตกลง'
        }
      );

    }
    //this.loginForm.reset();
    //alert("OK");
  }

}
