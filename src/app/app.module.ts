import { showAppComponent } from './courses/show-app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {FormsModule} from '@angular/forms';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapModalComponent } from './ngx-bootstrap-modal/ngx-bootstrap-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SideComponent } from './side/side.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    MessagesComponent,
    NgxBootstrapModalComponent,
    SideComponent,
    showAppComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ModalModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
