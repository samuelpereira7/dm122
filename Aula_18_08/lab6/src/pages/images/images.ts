import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoService } from '../../app/services/photos.service';

@Component({
  selector: 'page-images',
  templateUrl: 'images.html'
})
export class ImagesPage {

  images:Array<any>;

  constructor(public navCtrl: NavController,
              private photoService: PhotoService) {

  }

  ionViewDidEnter(){
    this.getImages();
  }
  //Laboratório 8 – Implemente a funcionalidade para buscar todas as imagens no firebase
  getImages(){
    this.photoService.getLocalStorageRef().then(
      (data) => {
        if (data && data.length > 0) {
          this.images = new Array<any>();
          data.forEach(
            item => {
              this.photoService.loadImages(item).getDownloadURL().then(
                (url) => {
                  this.images.push(url);
                }
              ).catch(
                (err) => {console.log(err)}
              )
            }
          )
        }
      }
    )
  }

}
