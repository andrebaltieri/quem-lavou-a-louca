import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { WashComponent } from './wash/wash.component';

export const config = {
  apiKey: "AIzaSyAv852Ah7_g_GoTXQYwuig_uS72qxcg8us",
  authDomain: "louca-ab524.firebaseapp.com",
  databaseURL: "https://louca-ab524.firebaseio.com",
  storageBucket: "louca-ab524.appspot.com",
  messagingSenderId: "407013229818"
};

const auth = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    WashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config,auth)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
