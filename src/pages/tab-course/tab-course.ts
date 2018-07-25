import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { CoursedetailPage } from '../coursedetail/coursedetail';
/**
 * Generated class for the TabCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {
  // กำหนดตัวแปรเพื่อรับค่าjson ต้องเป็นarray
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public app: App) {
  }

  ionViewDidLoad() {
    this.webapi.getData("feed_course.php").then((result) => {
      //console.log(result)
      this.responseData = result;
    });
  }

  courseDetail(id) {
    //alert(id);
    this.app.getRootNav().push(CoursedetailPage,{id:id})
  }


}
