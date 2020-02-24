import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  providers = AuthProvider;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

}
