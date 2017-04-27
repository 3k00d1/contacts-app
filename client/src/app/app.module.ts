//angular modules
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConnectionBackend, Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes}   from '@angular/router';
//other modules
import 'rxjs/add/operator/toPromise';
import {NgPipesModule} from 'ngx-pipes';
import 'hammerjs';
import 'lodash';
//components
import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item.component';
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component';
import {MapDialogComponent} from './map/map-dialog/map-dialog.component';
import {LoginComponent} from './user/login/login.component';
import {ContactsComponent} from './contact/contacts.component';
//services
import {ContactLocalStorageService} from './contact/services/contact-localstorage.service';
import {ContactService} from './contact/services/contact.service';
import {ContactApiService} from './contact/services/contact-api.service';
import {DialogService} from './utils/dialog.service';
import {DeviceService} from "./utils/device.service";
import {UserService} from "./user/services/user.service";
import {AuthenticationService} from "./user/services/authentication.service";
import {HttpService} from "./utils/http.service";
//pipes
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {UserApiService} from "./user/services/user-api.service";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent}
];

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    LoginComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    NgPipesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions]
    },
    DialogService,
    ContactService,
    ContactLocalStorageService,
    ContactApiService,
    DeviceService,
    UserService,
    AuthenticationService,
    UserApiService
  ],
  entryComponents: [ContactDialogComponent, MapDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
