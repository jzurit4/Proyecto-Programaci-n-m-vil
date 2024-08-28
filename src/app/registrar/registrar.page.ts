import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  regis:any={
    usuario:"",
    password:"",
    fecha:"" 
  }
  field:string="";
  constructor(public router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }
  registro(){
    if(this.validateModel(this.regis)){
      this.presentToast("top","Bienvenid@");
      let navigationExtras : NavigationExtras ={
        state: {login : this.regis}
      };
      this.router.navigate(['/home'],navigationExtras);
    }else{
      this.presentToast("top","Error - Falta: "+this.field,5000);
    }    
  }
  
  validateModel(model:any){

    for(var [key,value] of Object.entries(model)){
      if(value == ""){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });

    await toast.present();
  }

}
