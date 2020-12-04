import { CollapseModule  } from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { HighlightDirective } from './highlight.pipe';
import { FilterPipe } from './filter.pipe';
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
import { SideComponent } from './side/side.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { LoginComponent } from './login/login.component';
import {NavAppComponent} from './navbar/navbar.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    MessagesComponent,
     SideComponent,
    showAppComponent,
    CheckoutComponent,
    FilterPipe,
    SelectDropdownComponent,
    HighlightDirective,
    LoginComponent,
    NavAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
