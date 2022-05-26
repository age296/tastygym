import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  password2: string = "";
  constructor(
    private register : RegisterService,
    private login: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.login.token) {
      console.log("You are alredy logged")
      this.router.navigate(['dashboard/exercises']);
    }
  }

  onClick() {
    if(this.username == "" || this.password == ""){
      alert("Las contraseñas no coinciden");
    }
    if(this.password != this.password2){
      alert("Las contraseñas no coinciden");
    }
    if (this.username != "" && this.password != "") {
      this.register.register(this.username, this.username).subscribe(data => {
        console.log(this.register)
        this.router.navigate(['dashboard/exercises']);
      }
      )
    }
  }
}
