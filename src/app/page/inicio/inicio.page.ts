import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  login:any;
  constructor(public alertController:AlertController,
    private activatedRoute: ActivatedRoute,
    private router : Router) { 
      this.activatedRoute.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation()?.extras.state){
          this.login = this.router.getCurrentNavigation()?.extras?.state?.['login']; 
          console.log(this.login);
        }
      });
    }
  ngOnInit() {
  }
  

}
