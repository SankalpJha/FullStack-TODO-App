import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BasicAuthenticationService } from '../basic-authentication.service';
import { WELCOME_URL } from 'src/app/app.constants';

export class HelloWorldBean {

  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient,
    private basicAuthService:BasicAuthenticationService

  ) { }


  executeHelloWorldBeanService(){
    //console.log('Hello World Bean Service')
    return this.http.get<HelloWorldBean>(`${WELCOME_URL}/hello-world-bean`)
  }

  executeHelloWorldBeanServiceWithParam(name){
    //console.log('Hello World Bean Service')
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken()
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`${WELCOME_URL}/hello-world-bean/${name}`,{
      headers})
  }

}
