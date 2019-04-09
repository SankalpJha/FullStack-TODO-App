import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ''
  password = ''
  errorMessage = 'Invalid Credentials!'
  invalidLogin = false

  // Router


  constructor( private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.hardcodedAuthenticationService.authenticate(this.userName,this.password)){
      this.router.navigate(['welcome', this.userName])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }


  handleBasicAuthLogin(){

    this.basicAuthService.executeAuthenticationService(this.userName,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.userName])
        this.invalidLogin = false  
      },
      error => {
        this.invalidLogin = true
        console.log(error)
      }
    )
    
  }

  handleJWTAuthLogin(){
    console.log(this.userName)
    console.log(this.password)

    this.basicAuthService.executeJWTAuthenticationService(this.userName,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.userName])
        this.invalidLogin = false  
      },
      error => {
        this.invalidLogin = true
        console.log(error)
      }
    )
    
  }

}
