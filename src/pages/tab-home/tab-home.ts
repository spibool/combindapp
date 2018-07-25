import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
userDetail:any;
loginstatus:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app:App) {
    //ตรวจว่ามีตัวแปรอยู่ในlocal storage
    let data = localStorage.getItem("userdata");
    if(data == null){this.userDetail="Guest";
                     this.loginstatus = false;} 
                     else {this.userDetail = data;
                     this.loginstatus = true;}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  showLogin()
  {
    this.app.getRootNav().push(LoginPage);

  }

  logout(){
    localStorage.removeItem("userData");
    this.navCtrl.setRoot(TabsPage);
  }

}
