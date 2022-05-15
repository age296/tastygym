import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private login: LoginServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.login.token){
      console.log("You are alredy logged")
    }
  }

  onClick(){  
    let susccess = false;
    let username = document.getElementById("username");
    let password = document.getElementById("pwd");
    if(username && password){
      this.login.login(username.innerText, password.innerText)
      /*
      this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });*/ 


    }
    if(susccess){
      this.router.navigate(['dashboard'])
    }
    console.log(username?.textContent)
  }

}
