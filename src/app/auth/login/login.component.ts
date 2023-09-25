import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  error = "";
  returnUrl!: string;
  profile: any = {};

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: AuthService,
  ) { }

  ngOnInit() {
    document.body.setAttribute("class", "authentication-bg");
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * Form submit
   */
  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Hmm!!',
        text: 'User and password are mandatory',
      })
      return;
    } else {
      this.loading = true;
      this.apiService
        .login(this.loginForm.value)
        .pipe(first())
        .subscribe(
          (data: any) => {
            console.log('data -->', data)
            window.sessionStorage.setItem('profile', JSON.stringify(data.res))
            let msg = 'You have been successful logged in.'
            this.successAlert(msg)
            this.loading = false
          },
          (error) => {
            this.error = error?.error['detail']

            Swal.fire({
              icon: 'error',
              text: this.error,
              title: 'Hmm!!',
            })
            this.loading = false


          }
        );
    }
  }

  successAlert(message: any) {
    let timerInterval: any
    Swal.fire({
      icon: 'success', title: 'Logged In', html: `${message}`, timer: 2000, timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = '../pages/sacco/home'

      }
    })
  }
}
