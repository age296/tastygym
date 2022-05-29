import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  username = "";
  constructor(private login: LoginServiceService,
    private route: Router
    ) { }

  ngOnInit() {
    this.username = this.login.username;
  }

  logout(){
    this.login.username = "";
    this.login.token = "";
    alert("Goodbye, see you soon!");
    window.location.reload();
    }
}
