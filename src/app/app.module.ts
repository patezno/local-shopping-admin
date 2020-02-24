import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot({
        apiKey: 'AIzaSyCNLUyTbihDvobP0I3E-pJwXIevwkLIxAM',
        authDomain: 'local-shopping-2c8e4.firebaseapp.com',
        databaseURL: 'https://local-shopping-2c8e4.firebaseio.com',
        projectId: 'local-shopping-2c8e4',
        storageBucket: 'local-shopping-2c8e4.appspot.com',
        messagingSenderId: '525910143961'
    }, () => 'local-shopping-admin', {
      authGuardFallbackURL: '/auth',
      authGuardLoggedInURL: '/home'
    }),
    MatPasswordStrengthModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
