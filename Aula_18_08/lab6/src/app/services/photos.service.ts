import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Storage } from '@ionic/storage';

const KEY_LOCALSTORAGE = "myphotos";

@Injectable()
export class PhotoService{
    constructor(private firebaseStorage:AngularFireStorage,
                private localStorage:Storage){}

    saveOnFirebase(imageData){
    const path = KEY_LOCALSTORAGE + "/" + new Date().getTime() + ".jpg";
    this.firebaseStorage.ref(path).putString(imageData,"data_url").then(
        (snapshot) => {
            this.savePath(path);
        },
        (err) => {
            console.log(err);
        }
    );
    }

    //Laboratório 8 – Implemente a funcionalidade para buscar todas as imagens no firebase
     loadImages(pathImage){
        return this.firebaseStorage.storage.ref().child(pathImage);
    }

    savePath(imagePath){
        return this.getLocalStorageRef().then(
          (data) => {
            if (data != null) {
              data.push(imagePath);
              return this.localStorage.set(KEY_LOCALSTORAGE,data);//retorna um Promisse
            } else {
              let images = [imagePath];
              return this.localStorage.set(KEY_LOCALSTORAGE, images);
            }
          }
        );
      }

    getLocalStorageRef(){
        return this.localStorage.get(KEY_LOCALSTORAGE);
    }
}