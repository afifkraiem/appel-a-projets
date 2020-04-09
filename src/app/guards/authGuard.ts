import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../Auth/token-storage.service';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorageService, private toast :ToastrService) {}

  canActivate() {
    
    if(!this.tokenStorage.SIUTokenExpiration()) {
      return true;
    }

    this.toast.info('Votre session est expirée, vous devez vous connecter', 'Session expirée');
    this.tokenStorage.signOut();
   window.location.href = 'https://auth-b2c.auf.org/auth/?authorize&client_id=11_5x39q6e96s080cogggk4wos0gcsksoogcs0g80kkgsws0g0oow&return_url=https%3A%2F%2Fcneuf-test-pipeline-wise-oryx.eu-de.mybluemix.net%2F%23%2FsignIn';
  return false;
  }

}