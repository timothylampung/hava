import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {UserService} from '../services/user.service';
import {AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AssetService,UserService],
  entryComponents: [AssetCreatorDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
