import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';

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
    let susccess = false;
    console.log(this.username)
    if (this.username != "" && this.password != "") {
      this.login.login(this.username, this.username).subscribe(data => {
        this.login.token = data["token"]
        this.router.navigate(['dashboard/exercises']);
      }
      )
    }
  }
}
