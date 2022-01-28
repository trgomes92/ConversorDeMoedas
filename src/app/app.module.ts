import { Conversao } from './container/conversao';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { ContainerResultadoComponent } from './container/container-resultado/container-resultado.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ContainerResultadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [Conversao],
  bootstrap: [AppComponent]
})
export class AppModule { }
