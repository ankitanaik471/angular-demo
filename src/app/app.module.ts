import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { UserCustomListComponent } from './user-custom-list/user-custom-list.component';
import { FooterComponent } from './footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    UserCustomListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
