import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoService } from '../../app/services/photos.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string = "DM122";
  captureDataUrl = "";

  constructor(public navCtrl: NavController,
              private camera:Camera,
              private actionController:ActionSheetController,
              private photoService:PhotoService) {
  }

  takePicture(){
    const cameraOptions: CameraOptions = {
      quality:50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    //Tirando uma foto
    this.camera.getPicture(cameraOptions).then(
      (image) => {
          this.captureDataUrl = 'data:image/jpeg;base64,' + image;
      },
      (err) => {
        console.log(err);
      }
    );

  }

  openActionSheet(){
    let actionSheet = this.actionController.create({
      title:"Fotos",
      cssClass: '',
      buttons: [
        {
          text:"Upload",
          icon: 'cloud-upload',
          handler: () => {
            this.photoService.saveOnFirebase(this.captureDataUrl);
          }
        },
        {
          text:"Apagar",
          icon: 'trash',
          role:'destructive',
          handler: () => {
            this.captureDataUrl = "";
          }
        }
      ]
    });
    actionSheet.present();
  }

}
