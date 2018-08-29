import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Laboratório 5 (Opcional) – Adicionando armazenamento local
import { IonicStorageModule } from '@ionic/storage'

/*Pages*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task';

/*Services*/
import { TodoService } from './services/todo.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Laboratório 5 (Opcional) – Adicionando armazenamento local
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
