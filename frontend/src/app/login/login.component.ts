import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';
import { DialogData, DialogDataDialog } from '../dialog-view/dialog-view.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private login: LoginServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.login.token){
      console.log("You are alredy logged")
      this.router.navigate(['dashboard/exercises']);
    }
  }

  onClick(){  
    
    console.log(this.username)
    if(this.username!="" && this.password!=""){
      this.login.login(this.username,this.username).subscribe(data  => {
        this.login.token = data["token"];
        this.login.username = this.username;
        console.log(data["token"])
        if(!this.login.token) alert("Failed to login")
        this.router.navigate(['dashboard/exercises']);

      }
    )
  }
      /*
      this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });*/ 


    
  }

}
