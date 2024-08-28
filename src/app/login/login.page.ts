import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any={
    usuario:"",
    password:""
  }
  //defino una variable para indicar el campo vacío
  field:string="";

  constructor(public router:Router, public toastController:ToastController) { }

  ngOnInit() {
  }
  ingresar(){
    if(this.validateModel(this.login)){
      this.presentToast("top","Bienvenid@");
      let navigationExtras : NavigationExtras ={
        state: {login : this.login}
      };
      this.router.navigate(['/home'],navigationExtras);
    }else{
      this.presentToast("top","Error - Falta: "+this.field,5000);
    }    
  }

  registrar(){
    this.router.navigate(['/registrar']);
  }

  validateModel(model:any){
    //Recorro el modelo 'login' revisando las entradas del Object
    for(var [key,value] of Object.entries(model)){
      //si un valor es "" retorno falso e indico el nombre del campo que falta
      if(value == ""){
        //rescato el nombre del campo vacío
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
