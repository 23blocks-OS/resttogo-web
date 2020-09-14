import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { metaReducers, reducers } from './core/reducers';
import {EffectsModule} from '@ngrx/effects';
import {Gateway23blocksModule} from './core/23blocks/gateway/gateway-23blocks.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Gateway23blocksModule.forRoot({
      apiBase: environment.API_23GATEWAY_URL,
      APPID: environment.APPID,
      registerAccountCallback: environment.APP_URL + '/auth/step2/',
      resetPasswordCallback: environment.APP_URL + '/auth/change-password/'}),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  
  providers: [
    Gateway23blocksModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

