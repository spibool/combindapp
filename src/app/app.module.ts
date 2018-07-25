import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Web Api
import { HttpModule} from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabChatPage } from '../pages/tab-chat/tab-chat';
import { TabContractPage } from '../pages/tab-contract/tab-contract';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp, SidePaymentPage, SidePortfolioPage, SideSchedulePage,
    SideSettingPage, TabArticlePage, TabChatPage, TabContractPage,
    TabCoursePage, TabHomePage, TabServicePage, TabsPage, CoursedetailPage,
   LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, SidePaymentPage, SidePortfolioPage, SideSchedulePage,
    SideSettingPage, TabArticlePage, TabChatPage, TabContractPage,
    TabCoursePage, TabHomePage, TabServicePage, TabsPage, CoursedetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider
  ]
})
export class AppModule {}
