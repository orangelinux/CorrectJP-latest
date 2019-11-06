import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatSnackBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CorrectJPComponent } from './correct-jp/correct-jp.component';
import { CorrectjpappComponent } from './correctjpapp/correctjpapp.component';
import { TotuzensiComponent } from './totuzensi/totuzensi.component';
import { RouterModule } from '@angular/router';
import { ReverseComponent } from './reverse/reverse.component';
import { AlienComponent } from './alien/alien.component';
import { APIComponent } from './api/api.component';
import { FalconComponent } from './falcon/falcon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorrectJPComponent,
    CorrectjpappComponent,
    TotuzensiComponent,
    ReverseComponent,
    AlienComponent,
    APIComponent,
    FalconComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
