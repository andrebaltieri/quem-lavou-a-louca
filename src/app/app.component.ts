import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public user: any;
  public lastWasher: string = 'camila.nachbar@gmail.com';

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
    this.af.auth.subscribe(data => {
      if (data) {
        this.user = {
          name: data.auth.displayName,
          email: data.auth.email,
          photo: data.auth.photoURL
        }
      }
    });
  }

  openModal() {
    document.getElementById('wash-modal').classList.add("is-active");
    document.getElementById('wash-modal').classList.add("animated");
    document.getElementById('wash-modal').classList.add("bounceInUp");
  }

  closeModal() {
    document.getElementById('wash-modal').classList.remove("is-active");
    document.getElementById('wash-modal').classList.remove("animated");
    document.getElementById('wash-modal').classList.remove("bounceInUp");
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  logout() {
    localStorage.clear();
    this.user = null;
  }
}
