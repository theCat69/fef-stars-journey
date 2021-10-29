import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './hompage/person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './reusable/spinner/spinner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BlankComponent } from './shared/blank/blank.component';
import { LogoComponent } from './shared/logo/logo.component';
import { GlowingBackgroundComponent } from './hompage/glowing-background/glowing-background.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SpinnerComponent,
    NavbarComponent,
    BlankComponent,
    LogoComponent,
    GlowingBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
